type TabProps = {
    file: FileNode,
    Icon: React.ElementType,
    isSelected?: boolean
    onClick?: (file: FileNode) => void
    onClose?: (file: FileNode) => void
}