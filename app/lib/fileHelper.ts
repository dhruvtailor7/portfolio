import ReactTSIcon from "../components/icons/ReactTSIcon"
import CSSIcon from "../components/icons/CSSIcon"
import FileIcon from "../components/icons/FileIcon"
import type { TreeData, FileNode, DirectoryNode } from "@/app/components/IDELayout/SideBar/Activities/ExplorerView/TreeView/types"

export const ROOT_PATH = '/my-portfolio'

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

export function findDirectoryByPath(nodes: TreeData, path: string): DirectoryNode | null {
    for (const node of nodes) {
        if (node.type === "directory" && node.path === path) return node

        if (node.type === "directory" && node.children) {
            const found = findDirectoryByPath(node.children, path)
            if (found) return found
        }
    }
    return null
}

export function resolvePath(cwd: string, input: string): string {
    if (input === '~') return ROOT_PATH

    const parts = input.split('/')
    const segments = input.startsWith('/')
        ? []
        : [...cwd.split('/').filter(Boolean)]

    for (const part of parts) {
        if (!part || part === '.') continue
        if (part === '..') segments.pop()
        else segments.push(part)
    }

    return segments.length ? `/${segments.join('/')}` : ROOT_PATH
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
