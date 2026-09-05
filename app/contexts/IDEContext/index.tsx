"use client"

import { createContext, useCallback, useMemo, useState } from "react"
import posthog from "posthog-js"
import { IDEContextType } from "./types"
import { findFileByPath } from "@/app/lib/fileHelper"
import { treeData } from "@/app/lib/constants"
import type { FileNode } from "@/app/components/IDELayout/SideBar/Activities/ExplorerView/TreeView/types"

const DEFAULT_SELECTED_ACTIVITY = 'explorer'
const ENTRY_FILE = "/my-portfolio/src/portfolio.tsx"

export const IDEContext = createContext<IDEContextType | null>(null)

export function IDEProvider({ children }: { children: React.ReactNode }) {
    const [selectedActivity, setSelectedActivity] =
        useState<IDEContextType['selectedActivity']>(DEFAULT_SELECTED_ACTIVITY)

    // TODO: Seperate to FileContext Provider
    const entryFile = useMemo(() => findFileByPath(treeData, ENTRY_FILE), [])
    const [openFiles, setOpenFiles] = useState<IDEContextType['openFiles']>(entryFile ? [entryFile] : [])
    const [activeFile, setActiveFile] = useState<IDEContextType['activeFile']>(entryFile?.path)

    // TODO: Seperate to WindowContext Provider
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), []);

    const [bottomPanelOpen, setBottomPanelOpen] = useState(false);
    const toggleBottomPanel = useCallback(() => setBottomPanelOpen(prev => !prev), []);

    const openFile = useCallback((file: FileNode) => {
        const isNew = !openFiles.some((open) => open.path === file.path)
        if (isNew) {
            posthog.capture("$pageview", {
                $current_url: `${window.location.origin}${file.path}`,
                $pathname: file.path,
            })
            setOpenFiles((files) => [...files, file])
        }

        setActiveFile(file.path)
    }, [openFiles])

    const closeFile = useCallback((file: FileNode) => {
        setOpenFiles((files) => {
            const index = files.findIndex((f) => f.path === file.path)
            if (index === -1) return files

            const newFiles = files.filter((f) => f.path !== file.path)

            setActiveFile((current: typeof activeFile) => {
                if (current !== file.path) return current

                if (newFiles.length === 0) return undefined

                const nextFile = newFiles[index] || newFiles[index - 1]

                return nextFile?.path
            })

            return newFiles
        })
    }, [])

    return (
        <IDEContext.Provider value={{
            selectedActivity,
            setSelectedActivity,

            openFiles,
            setOpenFiles,

            activeFile,
            setActiveFile,

            openFile,
            closeFile,

            sidebarOpen,
            toggleSidebar,

            bottomPanelOpen,
            toggleBottomPanel,
        }}>
            {children}
        </IDEContext.Provider>
    )
}
