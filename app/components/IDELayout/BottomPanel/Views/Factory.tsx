import TerminalView from "./TerminalView";
import type { BottomPanelTabId } from "../types";

export default class ViewFactory {
    static getView(tabId?: BottomPanelTabId) {
        switch(tabId) {
            case 'terminal':
                return <TerminalView />
            default:
                return null
        }
    }
}
