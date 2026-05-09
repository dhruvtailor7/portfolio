import type { Metadata } from "next";
import { Cabin_Sketch, JetBrains_Mono } from "next/font/google";
import "./styles/globals.css";

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
  title: "Dhruv Tailor",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${cabinetGrotesk.variable} h-full antialiased`} 
    >
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
