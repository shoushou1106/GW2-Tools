import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import * as React from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          花园战争 2 简体中文 Mod 官方网页<br className="hidden sm:inline" />
          测试中
        </h1>
      </div>
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          N网：https://www.nexusmods.com/plantsvszombiesgardenwarfare2/mods/379/
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          ParaTranz：https://paratranz.cn/projects/9739
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          QQ群：796783086，577513205，940656816
        </p>
      </div>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <p className="max-w-[700px] text-lg text-muted-foreground">
          下面的内容全都是测试用的，别点。
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href={siteConfig.links.download}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Download
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.nexusmods}
          className={buttonVariants({ variant: "outline" })}
        >
          Nexus mods
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.paratranz}
          className={buttonVariants({ variant: "outline" })}
        >
          ParaTranz
        </Link>
      </div>
    </section>
  )
}



