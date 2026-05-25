import auroraTheme from "./aurora"
import sakuraNoirTheme from "./sakuraNoir"
import akatsukiTheme from "./akatsuki"
import eclipseTheme from "./eclipse"
import obsidianTheme from "./obsidian"
import abyssalTheme from "./abyssal"
import vscodeDarkTheme from "./vscodeDark"
import type { Theme } from "@/app/services/ThemeService/types"

export const themes: Record<Theme['id'], Theme> = {
  [auroraTheme.id]: auroraTheme,
  [sakuraNoirTheme.id]: sakuraNoirTheme,
  [akatsukiTheme.id]: akatsukiTheme,
  [eclipseTheme.id]: eclipseTheme,
  [obsidianTheme.id]: obsidianTheme,
  [abyssalTheme.id]: abyssalTheme,
  [vscodeDarkTheme.id]: vscodeDarkTheme,
}
