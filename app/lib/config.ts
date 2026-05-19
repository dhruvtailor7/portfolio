export const siteUrl =
    process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const isPreview = process.env.VERCEL_ENV === 'preview'