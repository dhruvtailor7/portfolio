type ActivityId = 'explorer' | 'search' | 'git' | 'extension'

type Activity = {
    id: ActivityId
    title: string
    icon: string
}
