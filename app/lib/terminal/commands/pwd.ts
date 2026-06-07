import type { CommandDefinition, CommandResult } from "../types"

export const pwdCommand: CommandDefinition = {
    name: 'pwd',
    description: 'Print working directory',
    handler(_args, ctx): CommandResult {
        return {
            status: 'success',
            output: [ctx.fs.getCwd()],
        }
    },
}
