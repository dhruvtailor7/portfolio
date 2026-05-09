type BaseNode = {
    name: string
    path?: string
}

type FileNode = BaseNode & {
    type: 'file'
}

type DirectoryNode = BaseNode & {
    type: 'directory'
    children?: TreeNode[]
}

type TreeNode = FileNode | DirectoryNode

type TreeData = TreeNode[]

type TreeViewProps = {
    data: TreeData
    level: number
}

type FileViewProps = {
    file: FileNode
    level: number
}

type DirectoryViewProps = {
    directory: DirectoryNode
    level: number
}