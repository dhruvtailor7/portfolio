import PromptPrefix from "./PromptPrefix";

export default function TerminalPrompt({ text, cwd }: { text?: string; cwd: string }) {
    return (
        <span className="w-full font-mono whitespace-pre-wrap break-words">
            <PromptPrefix cwd={cwd} />
            {" "}
            <span>{text}</span>
        </span>
    )
}
