import Explorer from "./Explorer";

export default class ActivityFactory {
    static getView(activity?: ActivityId) {
        switch(activity) {
            case 'explorer':
                return <Explorer />
            case undefined:
            default:
                return <>Please select an activity from SideBar</>
        }
    }
}