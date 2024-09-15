import "@/styles/globals.css"
import type { Metadata, ResolvingMetadata } from "next"

import { zhcnSiteConfig } from "@/config/site"
import { fontMono, fontSans, fontSansCn } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header-zhcn"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: zhcnSiteConfig.name,
    template: `%s - ${zhcnSiteConfig.name}`,
  },
  description: zhcnSiteConfig.description,
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
    "中文（普通话，简体）",
    "Chinese (Mandarin, Simplified)",
    "Chinese",
    "Simplified Chinese",
    "Mandarin",
    "简体中文",
    "简中",
    "简化字",
    "简体字",
    "汉化",
    "简中",
    "Mod",
    "模组",
    "补丁",
    "CHS",
    "zh-CN",
    "zh-Hans",
    "字体",
    "Frosty",
    "FrostyToolsuite",
    "Frosty Toolsuite",
    "Frosty Tool Suite",
    "FrostyModManager",
    "Frosty ModManager",
    "Frosty Mod Manager",
    "FrostyEditor",
    "Frosty Editor",
    "寒霜",
    "寒霜模组",
    "寒霜Mod",
    "寒霜模组管理器",
    "寒霜Mod管理器",
    "寒霜编辑器",
  ],
  creator: "shoushou1106",
  openGraph: {
    type: "website",
    locale: "zh",
    url: zhcnSiteConfig.url,
    title: zhcnSiteConfig.name,
    description: zhcnSiteConfig.description,
    siteName: zhcnSiteConfig.name,
    images: [
      {
        url: `${zhcnSiteConfig.url}/ogimage.png`,
        width: 3840,
        height: 2160,
        alt: zhcnSiteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: zhcnSiteConfig.name,
    description: zhcnSiteConfig.description,
    images: `${zhcnSiteConfig.url}/ogimage.png.webp`,
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
    icon: "/zhcn/favicon-1000x1000.png.webp",
    shortcut: "/zhcn/favicon-1000x1000.png.webp",
    apple: "/zhcn/apple-touch-icon.png",
  },
  metadataBase: new URL("https://gw2.shoushou1106.org/zhcn"),
  manifest: `${zhcnSiteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ZhcnLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="zh">
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
