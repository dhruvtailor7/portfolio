import { TerminalContext } from "../contexts/TerminalContext"
import { useContext } from "react"

export default function useTerminalContext() {
    const ctx = useContext(TerminalContext)
    if (!ctx) {
        throw new Error("useTerminalContext must be used inside TerminalProvider")
    }
    return ctx
}   