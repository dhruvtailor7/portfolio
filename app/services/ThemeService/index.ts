import vscodeDarkTheme from "@/app/lib/themes/vscodeDark"
import { Theme } from "./types"
import { themes } from "@/app/lib/themes"
import eventEmitter from "@/app/lib/eventEmitter"

const THEME_STORAGE_KEY = "theme-id"
export const ThemeChangedEvent = "theme-changed"
class ThemeService {
    private static instance: ThemeService

    private currentThemeId: Theme['id']

    private constructor() {
        this.currentThemeId = "" as Theme['id']

        if (typeof window !== "undefined") {
            const savedThemeId = localStorage.getItem(THEME_STORAGE_KEY) as Theme['id'] | null
            this.setTheme(savedThemeId && themes[savedThemeId] ? savedThemeId : vscodeDarkTheme.id)
        }
    }

    public getCurrentTheme(): Theme | undefined {
        return themes[this.currentThemeId]
    }

    public getCurrentThemeId(): Theme['id'] {
        return this.currentThemeId
    }

    public setTheme(themeId: Theme['id']) {
        if (this.currentThemeId === themeId) {
            return
        }

        if (!themes[themeId]) {
            return
        }

        document.documentElement.setAttribute('data-theme', themeId)
        localStorage.setItem(THEME_STORAGE_KEY, themeId)
        this.currentThemeId = themeId
        eventEmitter.emit(ThemeChangedEvent, this.getCurrentTheme())
    }

    public static getInstance(): ThemeService {
        if (!ThemeService.instance) {
            ThemeService.instance = new ThemeService()
        }
        return ThemeService.instance
    }
}

export default ThemeService.getInstance()
