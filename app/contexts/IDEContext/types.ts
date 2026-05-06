import {Dispatch, SetStateAction} from "react"

export type IDEContextType = {
    selectedActivity: ActivityId
    setSelectedActivity: Dispatch<SetStateAction<ActivityId>>

    openFiles: FileNode[]
    setOpenFiles: Dispatch<SetStateAction<FileNode[]>>

    activeFile?: FileNode['name']
    setActiveFile: Dispatch<SetStateAction<FileNode['name'] | undefined>>

    openFile: (file: FileNode) => void
    closeFile: (file: FileNode) => void
}
