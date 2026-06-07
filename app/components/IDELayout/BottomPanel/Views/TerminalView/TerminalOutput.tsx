import { TerminalLine } from "./types";
import TerminalPrompt from "./TerminalPrompt";
import { ROOT_PATH } from "@/app/lib/fileHelper";

export default function TerminalOutput({ line }: { line: TerminalLine }) {
    switch (line.kind) {
        case "prompt":
            return <TerminalPrompt text={line.text} cwd={line.cwd ?? ROOT_PATH} />;
        case "system":
        case "stdout":
        case "stderr":
            return <pre
                className={`${line.tone === 'muted' ? 'text-(--muted-foreground)' : ''} ${line.kind === 'stderr' ? 'text-[red]' : ''} whitespace-pre-wrap`}
            >
                {line.text}
            </pre>
        default:
            return null;
    }
}