export default function FolderOpenIcon({size = 24, color = '#dcb67a'}: FolderOpenIconProps) {
    return (
        <svg role="img" width={size} height={size} fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <title>Default Folder Open</title>
            <path d="M27.4,5.5H18.2L16.1,9.7H4.3V26.5H29.5V5.5Zm0,18.7H6.6V11.8H27.4Zm0-14.5H19.2l1-2.1h7.1V9.7Z" fill={color}/>
            <polygon points="25.7 13.7 0.5 13.7 4.3 26.5 29.5 26.5 25.7 13.7" fill={color}/>
        </svg>
    )
}

type FolderOpenIconProps = {
    size?: number
    color?: string
}