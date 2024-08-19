"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function Home() {
  return (
    <div>
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
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        以下均为测试内容，请勿点击。
      </p>
      <Button>Click me</Button>
      <ModeToggle/>
    </div>
  )
}
