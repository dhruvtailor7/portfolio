import type { CommandDefinition, CommandResult } from "../types";

export const clearCommand: CommandDefinition = {
    name: 'clear',
    description: 'Clear the terminal',
    handler(_args, ctx): CommandResult {
        ctx.clear.clearTranscript();
        return {
            status: 'success',
            output: [],
        }
    },
}
