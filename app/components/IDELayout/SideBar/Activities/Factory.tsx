import ExplorerView from "./ExplorerView";
import ExtensionView from "./ExtensionView";
import type { ActivityId } from "../../ActivityBar/types";

export default class ActivityFactory {
    static getView(activity?: ActivityId) {
        switch(activity) {
            case 'explorer':
                return <ExplorerView />
            case 'extension':
                return <ExtensionView />
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