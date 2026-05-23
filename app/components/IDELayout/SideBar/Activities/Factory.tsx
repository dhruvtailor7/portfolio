import Explorer from "./Explorer";
import Extension from "./Extension";

export default class ActivityFactory {
    static getView(activity?: ActivityId) {
        switch(activity) {
            case 'explorer':
                return <Explorer />
            case 'extension':
                return <Extension />
            case undefined:
            default:
                return <NoActivityView />
                 
        }
    }
}

export function NoActivityView() {
    return (
        <div className="py-4 px-2 flex-1 flex justify-center">
            <span className="text-(--muted-foreground) text-sm">
                Coming soon...
            </span>
        </div>
    )
}