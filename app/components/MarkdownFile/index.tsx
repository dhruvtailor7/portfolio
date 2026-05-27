import type { MarkdownFileProps } from "./types"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function MarkdownFile({ content }: MarkdownFileProps) {
  return (
    <div className="markdown py-6 px-8 h-full bg-(--background) overflow-y-auto thin-scrollbar select-text">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}