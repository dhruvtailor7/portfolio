import type { Metadata } from "next";
import { Cabin_Sketch, JetBrains_Mono } from "next/font/google";
import "./styles/globals.css";
import { myData } from "@/app/lib/constants"
import { Analytics } from '@vercel/analytics/next';
import { isPreview } from "./lib/config";
import QuickPickerDropdown from "./components/QuickPickerDropdown";
import auroraTheme from "./lib/themes/aurora";

const {
    personal,
    site,
} = myData

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"]
});

const cabinetGrotesk = Cabin_Sketch({
  weight: "400",
  variable: "--font-cabin-sketch",
  subsets: ["latin"]
});

export const metadata: Metadata = {
    title: site.title,
    description: site.description,
    keywords: site.keywords,
    authors: [
        {
            name: personal.name.full,
            url: site.url,
        },
    ],
    creator: personal.name.full,
    metadataBase: new URL(site.url),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: site.title,
        description: site.description,
        url: site.url,
        siteName: personal.name.full,
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: site.ogImage,
                width: 1200,
                height: 630,
                alt: site.title,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: site.title,
        description: site.description,
        images: [site.ogImage],
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme={auroraTheme.id}
      className={`${jetbrainsMono.variable} ${cabinetGrotesk.variable} h-full antialiased select-none`}
    >
      <body className="h-full overflow-hidden">
        {children}
        {!isPreview && <Analytics />}
        <QuickPickerDropdown />
      </body>
    </html>
  );
}
