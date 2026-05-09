const content = [
    "# the rest is working as intended",
    "bugs/",
    "",
    "# Secrets must not be shared",
    ".env",
    "",
    "# never opened, but still relevant",
    "!mistakes/"
]

export default function TextFile({content}: TextFileProps) {
    return (
        <div className="px-3 py-3">
            {
                content.map((text, idx) => {
                    return (
                        <div key={`${text}-${idx}`} className="flex">
                            <span className="w-12 text-right text-(--muted-foreground)">{idx + 1}</span>
                            <span className="pl-3 text-(--foreground) whitespace-pre">{text}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}