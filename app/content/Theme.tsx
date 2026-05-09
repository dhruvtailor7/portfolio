import TextFile from "./TextFile"

const content = [
    ":root {",
    "  --background: #1e1e1e;",
    "  --surface: #252526;",
    "  --surface-elevated: #2d2d30;",
    "  --border: #3e3e42;",
    "  --accent: #007acc;",
    "  --foreground: #d4d4d4;",
    "  --muted-foreground: #808080;",
    "  --highlight-1: #c792ea;",
    "  --highlight-2: #89ddff;",
    "}"
]

export default function Theme() {
    return (
        <TextFile content={content} />
    )
}
