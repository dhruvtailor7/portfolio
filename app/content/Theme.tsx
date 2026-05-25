import TextFile from "../components/TextFile"

const content = [
    `[data-theme="aurora"] {`,
        "  --background: #0b0a1a;",
        "  --surface: #110f24;",
        "  --surface-elevated: #18162f;",
        "  --border: #2a2450;",
        "  --accent: #a78bfa;",
        "  --accent-elevated: #c4b5fd;",
        "  --foreground: #e2dff5;",
        "  --muted-foreground: #6b5fa8;",
        "  --highlight-1: #4ade80;",
        "  --highlight-2: #38bdf8;",
        "  --highlight-3: #f472b6;",
    "}",      
]

export default function Theme() {
    return (
        <TextFile content={content} />
    )
}
