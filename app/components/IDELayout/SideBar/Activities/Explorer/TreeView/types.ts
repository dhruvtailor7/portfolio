type BaseNode = {
    name: string
    path?: string
}

export type FileNode = BaseNode & {
    type: 'file'
}

export type DirectoryNode = BaseNode & {
    type: 'directory'
    children?: TreeNode[]
}

export type TreeNode = FileNode | DirectoryNode

export type TreeData = TreeNode[]

export type TreeViewProps = {
    data: TreeData
    level: number
}

export type FileViewProps = {
    file: FileNode
    level: number
}

export type DirectoryViewProps = {
    directory: DirectoryNode
    level: number
}