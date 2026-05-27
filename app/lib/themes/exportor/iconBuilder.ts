import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import ThemesIcon from "@/app/components/icons/ThemesIcon"

export function buildIconSvg(): string {
    const html = renderToStaticMarkup(React.createElement(ThemesIcon, { size: 24 }))

    return html
}

export function svgToPng(svg: string): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
        const blob = new Blob([svg], { type: 'image/svg+xml' })
        const url = URL.createObjectURL(blob)
        const img = new Image()
        img.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = 128
            canvas.height = 128
            canvas.getContext('2d')!.drawImage(img, 0, 0, 128, 128)
            URL.revokeObjectURL(url)
            canvas.toBlob((pngBlob) => {
                if (!pngBlob) { reject(new Error('Failed to convert SVG to PNG')); return }
                pngBlob.arrayBuffer().then(buf => resolve(new Uint8Array(buf)))
            }, 'image/png')
        }
        img.onerror = (error) => { 
            console.error('Failed to load SVG:', error);
            URL.revokeObjectURL(url); 
            reject(new Error('Failed to load SVG')); 
        }
   
        img.src = url
    })
}
