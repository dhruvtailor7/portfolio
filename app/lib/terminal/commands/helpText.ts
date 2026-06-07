import type { CommandDefinition } from "../types"

export function buildHelpOutput(registry: Record<string, CommandDefinition>): string[] {
    return [
        'Available commands',
        ...Object.values(registry)
            .filter((cmd) => !cmd.hidden)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((cmd) => `\`${cmd.usage ?? cmd.name}\` - ${cmd.description}`),
    ]
}
