import React from "react"

const viewRegistry: Record<string, () => Promise<{default: React.ComponentType}>> = {
    "/my-portfolio/src/portfolio.tsx": () => import("@/app/content/Portfolio"),
    "/my-portfolio/.gitignore": () => import("@/app/content/GitIgnore"),
    "/my-portfolio/styles/themes.css": () => import("@/app/content/Theme"),
    "package.json": () => import("@/app/content/PackageJSON")
}

export class ViewFactory {
    static async getView(filePath?: FileNode["path"]): Promise<React.ComponentType | null> {
        if(!filePath) {
            return null
        }

        return (await viewRegistry[filePath]?.())?.default
    }
}