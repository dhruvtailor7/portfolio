import { zipSync, strToU8 } from "fflate"
import { themes } from ".."
import { contentTypesXml, manifestXml, pkg, data, readme } from "./metadata"
import { readThemeColors } from "./colorReader"
import { buildThemeJson } from "./themeBuilder"
import { buildIconSvg, svgToPng } from "./iconBuilder"

export async function exportThemes() {
    const iconBytes = await svgToPng(buildIconSvg())

    const files: Record<string, Uint8Array> = {
        '[Content_Types].xml':    strToU8(contentTypesXml),
        'extension.vsixmanifest': strToU8(manifestXml),
        'extension/package.json': strToU8(JSON.stringify(pkg, null, 2)),
        'extension/README.md':    strToU8(readme),
        'extension/icon.png':     iconBytes,
    }

    for (const theme of Object.values(themes)) {
        const t = { ...theme, ...readThemeColors(theme.id) }
        files[`extension/themes/${theme.id}.json`] = strToU8(JSON.stringify(buildThemeJson(t), null, 2))
    }

    const zipped = zipSync(files)
    const blob = new Blob([zipped], { type: 'application/octet-stream' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${data.name}.vsix`
    a.click()
    URL.revokeObjectURL(url)
}
