export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "GW2 Tools",
  url: "https://gw2.shoushou1106.org",
  description: "Garden Warfare 2 Tools",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/shoushou1106/GW2-Tools",
    bilibili: "https://space.bilibili.com/436542054",
  },
}

export const zhcnSiteConfig = {
  name: "GW2 简体中文 Mod",
  url: "https://gw2.shoushou1106.org/zhcn",
  description: "花园战争 2 简体中文 Mod",
  mainNav: [
    {
      title: "主页",
      href: "/zhcn/",
    },
    {
      title: "下载",
      href: "/zhcn/download",
    },
    {
      title: "订阅",
      href: "/zhcn/subscribe",
    },
    {
      title: "参与制作",
      href: "/zhcn/contribute",
    },
    {
      title: "关于",
      href: "/zhcn/about",
    },
  ],
  links: {
    nexusmods:
      "https://www.nexusmods.com/plantsvszombiesgardenwarfare2/mods/379",
    paratranz: "https://paratranz.cn/projects/9739",
    github: "https://github.com/shoushou1106/GW2-Tools",
    bilibili: "https://space.bilibili.com/436542054",
  },
}
