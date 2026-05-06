const btnConfigs = [
    { title: "Close", color: "#ff5f57" },
    { title: "Minimize", color: "#febc2e" },
    { title: "Maximize", color: "#28c840" },
];

export default function WindowControls() {
    return (
        <div className="flex flex-row items-center gap-1.5">
            {btnConfigs.map((config) => {
                return (
                    <button 
                        key={config.title} 
                        className="w-2.75 h-2.75 rounded-full border-none cursor-pointer" 
                        style={{ backgroundColor: config.color }}
                        title={config.title}
                    />
                );
            })}
        </div>
    );
}