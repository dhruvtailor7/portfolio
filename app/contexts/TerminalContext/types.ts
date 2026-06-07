import { TerminalLine } from "@/app/components/IDELayout/BottomPanel/Views/TerminalView/types"

export type TerminalContextType = {
    input: string
    handleInput: (input: string) => void
    transcript: TerminalLine[]
    history: string[]
    historyIndex: number | null
    cwd: string

    submitCommand: (command: string) => void
}