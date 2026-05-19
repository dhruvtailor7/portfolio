import {Dispatch, SetStateAction} from "react"

export type IDEContextType = {
    selectedActivity: ActivityId
    setSelectedActivity: Dispatch<SetStateAction<ActivityId>>

    openFiles: FileNode[]
    setOpenFiles: Dispatch<SetStateAction<FileNode[]>>

    activeFile?: FileNode['path']
    setActiveFile: Dispatch<SetStateAction<FileNode['path'] | undefined>>

    openFile: (file: FileNode) => void
    closeFile: (file: FileNode) => void

    sidebarOpen: boolean
    toggleSidebar: () => void
}
