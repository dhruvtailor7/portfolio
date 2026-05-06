type ActivityId = 'explorer' | 'search' | 'git' | 'extension'

interface Activity {
    id: ActivityId
    title: string
    icon: string
}

interface ActivityBarProps {
    selectedActivity?: ActivityId
    onClick?: (activityId: ActivityId) => void
}