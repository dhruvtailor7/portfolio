import type { PulseProps } from "./types"

export default function LiveViewerCount() {
    return (
        <div className="flex flex-row items-center gap-2">
            <Pulse color="#32b94d" />
            <p><span className="font-bold">4</span> People Exploring</p>
        </div>
    )
}

function Pulse({ color }: PulseProps) {
  return (
    <div className="relative flex items-center justify-center w-2 h-2">
      
      <div
        className="absolute inset-0 rounded-full animate-wave-pulse"
        style={{
          backgroundColor: color,
        }}
      />

      <div
        className="relative w-2 h-2 rounded-full"
        style={{
          backgroundColor: color,
        }}
      />
    </div>
  )
}