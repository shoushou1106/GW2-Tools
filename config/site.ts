export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "GW2 简体中文 Mod",
  url: "https://gw2-zhcn.shoushou1106.cloudns.ch",
  description:
    "花园战争 2 简体中文 Mod",
  mainNav: [
    {
      title: "主页",
      href: "/",
    },
    {
      title: "下载",
      href: "/download",
    },
    {
      title: "参与制作",
      href: "/contribute",
    },
    {
      title: "关于",
      href: "/about",
    },
  ],
  links: {
    nexusmods: "https://www.nexusmods.com/plantsvszombiesgardenwarfare2/mods/379",
    paratranz: "https://paratranz.cn/projects/9739",
    github: "https://github.com/shoushou1106/gw2-zhCN",
    bilibili: "https://space.bilibili.com/436542054",
  },
}
