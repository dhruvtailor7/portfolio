export type ActivityId = 'explorer' | 'search' | 'git' | 'extension'

export type Activity = {
    id: ActivityId
    title: string
    icon: string
}
