import { TerminalLine } from "@/app/components/IDELayout/BottomPanel/Views/TerminalView/types"

export type TerminalContextType = {
    input: string
    handleInput: (input: string) => void
    submitCommand: (command: string) => void

    history: string[]
    onArrowUp: () => void
    onArrowDown: () => void

    transcript: TerminalLine[]
    cwd: string
}