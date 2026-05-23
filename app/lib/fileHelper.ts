import ReactTSIcon from "../components/icons/ReactTSIcon"
import CSSIcon from "../components/icons/CSSIcon"
import FileIcon from "../components/icons/FileIcon"

export function findFileByPath(nodes: TreeData, path: string): FileNode | null {
    for (const node of nodes) {
        if (node.type === "file" && node.path === path) return node

        if (node.type === "directory" && node.children) {
            const found = findFileByPath(node.children, path)
            if (found) return found
        }
    }
    return null
}

export function getFileExtension(file: FileNode) {
    return file.name.split('.').pop()
}

export function getFileIcon(file: FileNode) {
    const extension = getFileExtension(file)
    switch(extension) {
        case 'tsx':
            return ReactTSIcon
        case 'css':
            return CSSIcon
        default:
            return FileIcon
    }
}