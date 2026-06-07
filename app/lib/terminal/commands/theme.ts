import type { CommandContext, CommandDefinition, CommandResult } from "../types";

export const themeCommand: CommandDefinition = {
    name: 'theme',
    usage: 'theme <name>',
    description: 'Set the theme',
    handler(args, ctx): CommandResult {
        if (args.length === 0) {
            return {
                status: 'error',
                output: ['Usage: theme <name>'],
            }
        }

        const themeName = args[0];
        ctx.theme.setTheme(themeName);
        return {
            status: 'success',
            output: [],
        }
    },
}
