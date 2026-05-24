import type { IconProps } from './types'

type FolderIconProps = IconProps & {
    color?: string
}

export default function FolderIcon({size = 24, style, color = '#dcb67a'}: FolderIconProps) {
    return (
        <svg role="img" width={size} height={size} fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={style}>
            <title>Default Folder</title>
            <path d="M27.5,5.5H18.2L16.1,9.7H4.4V26.5H29.6V5.5Zm0,4.2H19.3l1.1-2.1h7.1Z" fill={color}/>
        </svg>
    )
}
