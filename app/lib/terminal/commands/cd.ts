import type { CommandDefinition, CommandResult } from "../types"

export const cdCommand: CommandDefinition = {
    name: 'cd',
    usage: 'cd [path]',
    description: 'Change directory',
    handler(args, ctx): CommandResult {
        if (args.length === 0) {
            return {
                status: 'error',
                output: ['Usage: cd <path>'],
            }
        }

        const target = args[0]
        const resolved = ctx.fs.resolvePath(target)

        if (!ctx.fs.setCwd(resolved)) {
            return {
                status: 'error',
                output: [`cd: no such file or directory: ${target}`],
            }
        }

        return {
            status: 'success',
            output: [],
        }
    },
}
