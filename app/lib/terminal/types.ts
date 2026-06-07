import { FileNode } from "@/app/components/IDELayout/SideBar/Activities/ExplorerView/TreeView/types"
import type { Theme } from "@/app/services/ThemeService/types"

export type CommandContext = {
    files: {
        openByPath: (path: FileNode['path']) => boolean
    }
    theme: {
        setTheme: (themeId: Theme['id']) => void
    }
    clear: {
        clearTranscript: () => void
    }
    fs: {
        getCwd: () => string
        setCwd: (path: string) => boolean
        resolvePath: (input: string) => string
        listDir: (path?: string) => string[] | null
    }
}

export type CommandResult = { status: 'success' | 'error', output: string[] }
export type CommandHandler = (args: string[], ctx: CommandContext) => CommandResult

export type CommandDefinition = {
    name: string
    description: string
    usage?: string
    hidden?: boolean
    handler: CommandHandler
}