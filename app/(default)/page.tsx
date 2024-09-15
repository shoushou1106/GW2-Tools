import * as React from "react"
import Link from "next/link"

import { zhcnSiteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="container grid gap-6 items-center md:py-10 pt-6 pb-8">
      <div className="flex flex-col gap-2 items-start max-w-[980px]">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter leading-tight">
          Garden Warfare 2 Tools
        </h1>
      </div>
      <div>
        <p className="[&:not(:first-child)]:mt-6 leading-7">
          This is just a thing in my mind, and I haven't started making it yet.<br/>
          如果您在寻找 GW2 简体中文 Mod，请点击下面的按钮。
        </p>
      </div>

      <div className="flex gap-4">
        <Link href="/zhcn" className={buttonVariants()}>
          跳转至 GW2 简体中文 Mod
        </Link>
      </div>
    </section>
  )
}
