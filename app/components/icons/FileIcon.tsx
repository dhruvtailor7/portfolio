import type { IconProps } from './types'

type FileIconProps = IconProps & {
    color?: string
}

export default function FileIcon({size = 24, style, color = 'currentColor'}: FileIconProps) {
    return (
        <svg role="img" width={size} height={size} fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={style}>
            <title>File</title>
            <path d="M20.414,2H5V30H27V8.586ZM7,28V4H19v6h6V28Z" fill={color}/>
        </svg>
    )
}
