interface TabProps {
    file: FileNode,
    icon: string,
    isSelected?: boolean
    onClick?: (file: FileNode) => void
    onClose?: (file: FileNode) => void
}