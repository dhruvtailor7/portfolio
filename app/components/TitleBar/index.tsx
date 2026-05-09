import AppName from "./AppName";
import CurrentTime from "./CurrentTime";
import WindowControls from "./WindowControls";

export default function TitleBar() {
    return <div className={`flex flex-row py-0.75 border-b border-(--border) justify-between items-center-safe text-xs bg-[var(--background)] px-2`}>
        <WindowControls />
        <AppName />
        <CurrentTime />
    </div>
}