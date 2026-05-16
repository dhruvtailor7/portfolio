import TextFile from "../components/TextFile"

const content = [
    "# the rest is working as intended",
    "bugs/",
    "",
    "# Secrets must not be shared",
    ".env",
    "",
    "# never commit, but still relevant",
    "!mistakes/"
]

export default function GitIgnore() {
    return (
        <TextFile content={content} />
    )
}