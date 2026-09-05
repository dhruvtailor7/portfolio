"use client"

import posthog from "posthog-js"
import { useEffect } from "react"

const POSTHOG_HOST = "https://us.i.posthog.com"

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) return

    posthog.init(key, {
      api_host: POSTHOG_HOST,
      capture_pageview: false,
      capture_pageleave: true,
    })

    const searchParams = new URLSearchParams(window.location.search)
    const utmProperties = Object.fromEntries(
      ["source", "medium", "campaign", "term", "content"].flatMap((name) => {
        const value = searchParams.get(`utm_${name}`)
        return value ? [[`utm_${name}`, value]] : []
      }),
    )
    if (Object.keys(utmProperties).length > 0) posthog.register_once(utmProperties)

    posthog.capture("$pageview")
  }, [])

  return children
}
