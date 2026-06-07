export const siteUrl =
    process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

/** Resolves the public site URL at runtime in the browser (preview/prod), server-side on SSR. */
export function getSiteUrl(): string {
    if (typeof window !== "undefined") {
        return window.location.origin
    }
    return siteUrl
}

export const isPreview = process.env.VERCEL_ENV === 'preview'