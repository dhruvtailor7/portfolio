import parseCommand from "../components/IDELayout/BottomPanel/Views/TerminalView/parseCommand";
import { commandRegistry } from "./terminal/commands";
import { CommandContext } from "./terminal/types";

export default function runCommand(command: string, ctx: CommandContext) {
    const { cmdName, cmdArgs } = parseCommand(command);

    if (!cmdName) {
        return { status: 'error', output: [] }
    }

    const definition = commandRegistry[cmdName];
    if (!definition) {
        return { status: 'error', output: [`command not found: ${cmdName}`] }
    }

    return definition.handler(cmdArgs, ctx);
}