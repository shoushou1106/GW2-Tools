"use client"
 
import * as React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        花园战争 2 简体中文 Mod 官方网页，测试中。
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        N网：https://www.nexusmods.com/plantsvszombiesgardenwarfare2/mods/379/
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        N网：https://www.nexusmods.com/plantsvszombiesgardenwarfare2/mods/379/
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        ParaTranz：https://paratranz.cn/projects/9739
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        QQ群：796783086，577513205，940656816
      </p>
      <h2 className="leading-7 [&:not(:first-child)]:mt-6">
        以下均为测试内容，请勿点击。
      </h2>
      <Button>Click me</Button>
      <ModeToggle/>
    </>
  )
}



