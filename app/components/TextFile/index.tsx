type TextFileProps = {
  content: string[];
};

export default function TextFile({ content }: TextFileProps) {
  return (
    <pre className="px-3 py-3 bg-(--background) rounded overflow-x-auto">
      {content.map((line, idx) => (
        <div key={idx} className="flex">
          <span className="w-12 text-right text-(--muted-foreground) select-none">
            {idx + 1}
          </span>

          <span className="pl-3 text-(--foreground)">{line}</span>
        </div>
      ))}
    </pre>
  );
}