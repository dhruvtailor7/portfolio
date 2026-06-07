import type { CommandDefinition } from "../types"

export const helpCommandMeta: Omit<CommandDefinition, 'handler'> = {
    name: 'help',
    description: 'Show available commands',
}

export function createHelpCommand(output: string[]): CommandDefinition {
    return {
        ...helpCommandMeta,
        handler(_args, _ctx) {
            return {
                status: 'success',
                output,
            }
        },
    }
}
