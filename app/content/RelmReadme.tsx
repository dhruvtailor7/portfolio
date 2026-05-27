import MarkdownFile from "../components/MarkdownFile"
import { readme } from "../lib/themes/exportor/metadata"

export default function RelmReadme() {
    return (
        <MarkdownFile content={readme} />
    )
}
