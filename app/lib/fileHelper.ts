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