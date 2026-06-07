type PromptPrefixProps = {
    cwd: string
}

export default function PromptPrefix({ cwd }: PromptPrefixProps) {
    return (
        <span className="inline-flex gap-1 items-baseline">
            <span className="text-[10px] font-semibold text-(--highlight-1)">-&gt;</span>
            <span className="font-bold text-(--highlight-2)">{cwd}</span>
            <span className="font-bold text-(--muted-foreground)">
                git:(
                <span className="text-(--highlight-3)">main</span>
                )
            </span>
        </span>
    )
}
