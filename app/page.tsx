import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="container grid gap-6 items-center md:py-10 pt-6 pb-8">
      <div className="flex flex-col gap-2 items-start max-w-[980px]">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter leading-tight">
          花园战争 2 简体中文 Mod
        </h1>
      </div>
      <div>
        <p className="[&:not(:first-child)]:mt-6 leading-7">
          此网页和 Mod 正处于前期测试，如需下载请看右上角加入QQ群，网站没做完。
        </p>
      </div>

      <div className="flex gap-4">
        <Link href="/download" className={buttonVariants()}>
          下载
        </Link>
      </div>
    </section>
  )
}
