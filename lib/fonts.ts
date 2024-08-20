import { JetBrains_Mono, Inter, Noto_Sans_SC } from "next/font/google"

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontSansCn = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-sans-cn",
})