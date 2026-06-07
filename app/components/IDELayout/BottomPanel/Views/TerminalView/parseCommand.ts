export default function parseCommand(command: string) {
    const [cmdName, ...cmdArgs] = command.split(' ');
    return { cmdName, cmdArgs };
}