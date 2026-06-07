import {Dispatch, SetStateAction} from "react"
import type { ActivityId } from "@/app/components/IDELayout/ActivityBar/types"
import type { FileNode } from "@/app/components/IDELayout/SideBar/Activities/ExplorerView/TreeView/types"

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

    bottomPanelOpen: boolean
    toggleBottomPanel: () => void
}
