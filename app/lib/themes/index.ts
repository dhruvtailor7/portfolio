import abyssalTheme from "./abyssal"
import akatsukiTheme from "./akatsuki"
import akiraTheme from "./akira"
import attackOnTitanTheme from "./attackOnTitan"
import divergenceTheme from "./divergence"
import edogawaTheme from "./edogawa"
import instrumentalityTheme from "./instrumentality"
import ouroborosTheme from "./ouroboros"
import swordfishTheme from "./swordfish"
import vscodeDarkTheme from "./vscodeDark"
import type { Theme } from "@/app/services/ThemeService/types"

export const themes: Record<Theme['id'], Theme> = {
  [abyssalTheme.id]: abyssalTheme,
  [akatsukiTheme.id]: akatsukiTheme,
  [akiraTheme.id]: akiraTheme,
  [attackOnTitanTheme.id]: attackOnTitanTheme,
  [divergenceTheme.id]: divergenceTheme,
  [edogawaTheme.id]: edogawaTheme,
  [instrumentalityTheme.id]: instrumentalityTheme,
  [ouroborosTheme.id]: ouroborosTheme,
  [swordfishTheme.id]: swordfishTheme,
  [vscodeDarkTheme.id]: vscodeDarkTheme,
}
