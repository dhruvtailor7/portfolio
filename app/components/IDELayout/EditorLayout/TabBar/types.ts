import type { FileNode } from "@/app/components/IDELayout/SideBar/Activities/ExplorerView/TreeView/types"

export type TabProps = {
    file: FileNode,
    Icon: React.ElementType,
    isSelected?: boolean
    onClick?: (file: FileNode) => void
    onClose?: (file: FileNode) => void
}