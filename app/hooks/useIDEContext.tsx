import { useContext } from "react";
import { IDEContext } from "../contexts/IDEContext";

export default function useIDEContext() {
    const ctx = useContext(IDEContext)

    if (!ctx) {
        throw new Error("useIDEContext must be used inside IDEProvider")
    }

    return ctx
}