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
            const exists = files.some((f) => f.name === file.name)

            if (exists) return files

            return [...files, file]
        })

        if(file.name !== activeFile) {
            setActiveFile(file.name)
        }
    }, [activeFile])

    const closeFile = useCallback((file: FileNode) => {
        setOpenFiles((files) => {
            const index = files.findIndex((f) => f.name === file.name)
            if (index === -1) return files

            const newFiles = files.filter((f) => f.name !== file.name)

            setActiveFile((current) => {
                if (current !== file.name) return current

                if (newFiles.length === 0) return

                const nextFile = newFiles[index] || newFiles[index - 1]
                return nextFile?.name
            })

            return newFiles
        })
    }, [])

    return <IDEContext.Provider value={{
        selectedActivity, setSelectedActivity,
        openFiles, setOpenFiles,
        activeFile, setActiveFile,

        openFile, closeFile
    }}
    >
        {children}
    </IDEContext.Provider>
}
