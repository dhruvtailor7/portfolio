"use client"

import MarkdownFile from "../components/MarkdownFile"
import { getSiteUrl } from "../lib/config"
import { getReadme } from "../lib/themes/exportor/metadata"

export default function RealmReadme() {
    return (
        <MarkdownFile content={getReadme(getSiteUrl())} />
    )
}
