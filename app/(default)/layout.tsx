import "@/styles/globals.css"
import type { Metadata, ResolvingMetadata } from "next"

import { siteConfig } from "@/config/site"
import { fontMono, fontSans, fontSansCn } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "PVZ GW2",
    "PVZGW2",
    "PvZ GW2",
    "PvZGW2",
    "GW2",
    "Garden Warfare 2",
    "花园战争2",
    "花园战争二",
    "花园2",
    "花园二",
    "花战2",
    "花战二",
    "花2",
    "花二",
    "Plants vs Zombies",
    "Plants vs. Zombies",
    "Plants vs. Zombies™",
    "植物大战僵尸™",
    "植物大战僵尸",
    "植物大戰殭屍™",
    "植物大戰殭屍",
    "植僵",
    "PvZ",
    "Plants vs Zombies Garden Warfare 2",
    "Plants vs. Zombies Garden Warfare 2",
    "Plants vs. Zombies™ Garden Warfare 2",
    "植物大戰殭屍：花園戰爭2",
    "植物大战僵尸：花园战争2",
    "植物大战僵尸：花园战争二",
    "植物大戰殭屍花園戰爭2",
    "植物大战僵尸花园战争2",
    "植物大战僵尸花园战争二",
    "植物大戰殭屍 花園戰爭2",
    "植物大战僵尸 花园战争2",
    "植物大战僵尸 花园战争二",
    "植物大戰殭屍:花園戰爭2",
    "植物大战僵尸:花园战争2",
    "植物大战僵尸:花园战争二",
  ],
  creator: "shoushou1106",
  openGraph: {
    type: "website",
    locale: "en",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/ogimage.png`,
        width: 3840,
        height: 2160,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: `${siteConfig.url}/ogimage.png.webp`,
    creator: "@shoushou1106",
    site: "@shoushou1106",
  },
  authors: [
    {
      name: "shoushou1106",
      url: "https://space.bilibili.com/436542054",
    },
  ],
  icons: {
    icon: "/favicon-1000x1000.png.webp",
    shortcut: "/favicon-1000x1000.png.webp",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://gw2.shoushou1106.org"),
  manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased bg-background",
            fontSans.variable,
            fontSansCn.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="flex relative flex-col h-screen bg-background">
                <SiteHeader />
                <div className="relative flex min-h-screen flex-col bg-background">{children}</div>
                <SiteFooter />
              </div>
            </div>
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
