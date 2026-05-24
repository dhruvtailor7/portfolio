import type { IconProps } from './types'

type ThemesIconProps = IconProps

export default function ThemesIcon({size = 24, style}: ThemesIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={style}>
            <rect x="4" y="4" width="7" height="7" rx="1.5" fill="#4cc9f0"/>
            <rect x="13" y="4" width="7" height="7" rx="1.5" fill="#f72585"/>
            <rect x="4" y="13" width="7" height="7" rx="1.5" fill="#7209b7"/>
            <rect x="13" y="13" width="7" height="7" rx="1.5" fill="#fca311"/>
        </svg>
    )
}
