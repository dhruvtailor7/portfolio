import { createContext, useCallback, useState } from "react";
import { TerminalContextType } from "./types";
import { TerminalLine } from "@/app/components/IDELayout/BottomPanel/Views/TerminalView/types";
import runCommand from "@/app/lib/commandRunner";
import ThemeService from "@/app/services/ThemeService";
import useIDEContext from "@/app/hooks/useIDEContext";
import { FileNode } from "@/app/components/IDELayout/SideBar/Activities/ExplorerView/TreeView/types";
import { findFileByPath, findDirectoryByPath, resolvePath, ROOT_PATH } from "@/app/lib/fileHelper";
import { treeData } from "@/app/lib/constants";

export const TerminalContext = createContext<TerminalContextType | null>(null)

export function TerminalProvider({ children }: { children: React.ReactNode }) {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number | null>(null);
    const [transcript, setTranscript] = useState<TerminalLine[]>([
        { kind: 'system', text: 'Type `help` to see available commands', tone: 'default' },
        { kind: 'system', text: 'Try `ls` • `theme akira` • `open portfolio.tsx` • `contact`', tone: 'muted' },
    ]);
    const [cwd, setCwd] = useState(ROOT_PATH);

    const { openFile } = useIDEContext();

    const submitCommand = useCallback((command: string) => {
        command = command.trim();
        if (!command) return;

        setTranscript((prev) => [...prev, { kind: 'prompt', text: command, cwd }]);
        setHistory((prev) => [...prev, command]);
        setHistoryIndex(null);
        setInput('');

        const result = runCommand(command, {
            files: {
                openByPath: (path: FileNode['path']) => {
                    if (!path) return false
                    const file = findFileByPath(treeData, path);
                    if (!file) {
                        return false
                    }
                    openFile(file)
                    return true
                },
            },
            theme: {
                setTheme: ThemeService.setTheme,
            },
            clear: {
                clearTranscript: () => {
                    setTranscript([])
                },
            },
            fs: {
                getCwd: () => cwd,
                setCwd: (path: string) => {
                    const dir = findDirectoryByPath(treeData, path)
                    if (!dir) return false
                    setCwd(path)
                    return true
                },
                resolvePath: (input: string) => resolvePath(cwd, input),
                listDir: (path?: string) => {
                    const target = path ?? cwd
                    const dir = findDirectoryByPath(treeData, target)
                    if (!dir?.children) return null
                    return dir.children.map((child) =>
                        child.type === 'directory' ? `${child.name}/` : child.name
                    )
                },
            },
        })

        setTranscript((prev) => {
            const kind = result.status === 'error' ? 'stderr' : 'stdout';
            const text = result.output.join('\n');
            if (text) {
                return [
                    ...prev,
                    { kind, text },
                ]
            }
            return prev;
        });
    }, [openFile, cwd]);

    const handleInput = useCallback((input: string) => {
        setInput(input);
    }, []);

    return (
        <TerminalContext.Provider
            value={{
                input,
                handleInput,
                history,
                historyIndex,
                transcript,
                cwd,
                submitCommand,
            }}>
            {children}
        </TerminalContext.Provider>
    )
}
