import type { TextFileProps } from "./types"

export default function TextFile({ content }: TextFileProps) {
  return (
    <pre className="py-3 h-full bg-(--background) rounded overflow-x-auto overscroll-none no-scrollbar relative  select-text">
      <div className="min-w-max">
        {content.map((line, idx) => (
          <div key={idx} className="flex">
            <span className="px-5 sticky left-0 bg-(--background) z-10 flex-shrink-0 w-18 text-right text-(--muted-foreground) select-none">
              {idx + 1}
            </span>
    
            <span className="pr-6 text-(--foreground) whitespace-pre">
              {line}
            </span>
          </div>
        ))}
      </div>
    </pre>
  );
}