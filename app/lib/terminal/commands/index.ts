import { createHelpCommand, helpCommandMeta } from "./help";
import { buildHelpOutput } from "./helpText";
import type { CommandDefinition } from "../types";
import { themeCommand } from "./theme";
import { clearCommand } from "./clear";
import { openCommand } from "./open";
import { contactCommand } from "./contact";
import { lsCommand } from "./ls";
import { pwdCommand } from "./pwd";
import { cdCommand } from "./cd";

const baseRegistry: Record<string, CommandDefinition> = {
    theme: themeCommand,
    clear: clearCommand,
    open: openCommand,
    contact: contactCommand,
    ls: lsCommand,
    pwd: pwdCommand,
    cd: cdCommand,
}

const helpOutput = buildHelpOutput({
    ...baseRegistry,
    help: { ...helpCommandMeta, handler: () => ({ status: 'success', output: [] }) },
})

export const commandRegistry: Record<string, CommandDefinition> = {
    ...baseRegistry,
    help: createHelpCommand(helpOutput),
}
