import type { CommandDefinition, CommandResult } from "../types"

export const openCommand: CommandDefinition = {
    name: 'open',
    usage: 'open <path>',
    description: 'Open a file',
    handler(args, ctx): CommandResult {
        const filePath = args[0]
        if (!filePath) {
            return {
                status: 'error',
                output: ['Usage: open <path>'],
            }
        }
        const resolved = ctx.fs.resolvePath(filePath)
        const success = ctx.files.openByPath(resolved);
        if (!success) {
            return {
                status: 'error',
                output: [`File not found: ${filePath}`],
            }
        }
        return {
            status: 'success',
            output: [],
        }
    },
}
