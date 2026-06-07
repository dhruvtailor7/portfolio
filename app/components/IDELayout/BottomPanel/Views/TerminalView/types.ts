export type TerminalLine = {
    kind: 'prompt' | 'stdout' | 'stderr' | 'system'
    text: string
    tone?: 'default' | 'muted'
    cwd?: string
}

