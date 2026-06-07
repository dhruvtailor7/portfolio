import type { CommandDefinition, CommandResult } from "../types"

export const lsCommand: CommandDefinition = {
    name: 'ls',
    usage: 'ls [path]',
    description: 'List directory contents',
    handler(args, ctx): CommandResult {
        const target = args[0]
            ? ctx.fs.resolvePath(args[0])
            : ctx.fs.getCwd()

        const entries = ctx.fs.listDir(target)
        if (entries === null) {
            const label = args[0] ?? target
            return {
                status: 'error',
                output: [`ls: cannot access '${label}': No such file or directory`],
            }
        }

        return {
            status: 'success',
            output: entries.length ? [entries.join('  ')] : [],
        }
    },
}
