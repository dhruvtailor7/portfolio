import React from "react"

const viewRegistry: Record<string, () => Promise<{default: React.ComponentType}>> = {
    "portfolio.tsx": () => import("@/app/content/Portfolio"),
    ".gitignore": () => import("@/app/content/GitIgnore"),
    "themes.css": () => import("@/app/content/Theme"),
    "package.json": () => import("@/app/content/PackageJSON")
}

export class ViewFactory {
    static async getView(fileName?: FileNode["name"]): Promise<React.ComponentType | null> {
        if(!fileName) {
            return null
        }

        return (await viewRegistry[fileName]?.())?.default
    }
}