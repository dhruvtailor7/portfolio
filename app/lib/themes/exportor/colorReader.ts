import { Theme } from "@/app/services/ThemeService/types"
import { ThemeColors } from "./types"

export function readThemeColors(themeId: Theme['id']): ThemeColors {
    const el = document.createElement("div")
    el.setAttribute("data-theme", themeId)
    el.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none'
    document.documentElement.appendChild(el)
    const s = getComputedStyle(el)

    const colors: ThemeColors = {
        background:      s.getPropertyValue('--background').trim(),
        surface:         s.getPropertyValue('--surface').trim(),
        surfaceElevated: s.getPropertyValue('--surface-elevated').trim(),
        border:          s.getPropertyValue('--border').trim(),
        accent:          s.getPropertyValue('--accent').trim(),
        accentElevated:  s.getPropertyValue('--accent-elevated').trim(),
        foreground:      s.getPropertyValue('--foreground').trim(),
        mutedForeground: s.getPropertyValue('--muted-foreground').trim(),
        h1:              s.getPropertyValue('--highlight-1').trim(),
        h2:              s.getPropertyValue('--highlight-2').trim(),
        h3:              s.getPropertyValue('--highlight-3').trim(),
    }

    document.documentElement.removeChild(el)
    return colors
}
