import abyssalTheme from "./abyssal"
import akatsukiTheme from "./akatsuki"
import akiraTheme from "./akira"
import attackOnTitanTheme from "./attackOnTitan"
import eclipseTheme from "./eclipse"
import sakuraNoirTheme from "./sakuraNoir"
import violetEvergardenTheme from "./violetEvergarden"
import vscodeDarkTheme from "./vscodeDark"
import type { Theme } from "@/app/services/ThemeService/types"

export const themes: Record<Theme['id'], Theme> = {
  [abyssalTheme.id]: abyssalTheme,
  [akatsukiTheme.id]: akatsukiTheme,
  [akiraTheme.id]: akiraTheme,
  [attackOnTitanTheme.id]: attackOnTitanTheme,
  [eclipseTheme.id]: eclipseTheme,
  [sakuraNoirTheme.id]: sakuraNoirTheme,
  [violetEvergardenTheme.id]: violetEvergardenTheme,
  [vscodeDarkTheme.id]: vscodeDarkTheme,
}
