"use client"

import { createContext, useCallback, useState } from "react"
import { IDEContextType } from "./types"

const DEFAULT_SELECTED_ACTIVITY = 'explorer'

export const IDEContext = createContext<IDEContextType | null>(null)

export function IDEProvider({ children }: { children: React.ReactNode }) {
    const [selectedActivity, setSelectedActivity] =
        useState<IDEContextType['selectedActivity']>(DEFAULT_SELECTED_ACTIVITY)

    const [openFiles, setOpenFiles] = useState<IDEContextType['openFiles']>([])
    const [activeFile, setActiveFile] = useState<IDEContextType['activeFile']>()

    const openFile = useCallback((file: FileNode) => {
        setOpenFiles((files) => {
            const exists = files.some((f) => f.path === file.path)
            if (exists) return files
            return [...files, file]
        })

        setActiveFile(file.path)
    }, [])

    const closeFile = useCallback((file: FileNode) => {
        setOpenFiles((files) => {
            const index = files.findIndex((f) => f.path === file.path)
            if (index === -1) return files

            const newFiles = files.filter((f) => f.path !== file.path)

            setActiveFile((current) => {
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
            closeFile
        }}>
            {children}
        </IDEContext.Provider>
    )
}
