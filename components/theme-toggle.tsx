"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {useTranslations} from 'next-intl';

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const tTheme = useTranslations('Theme');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="transition-all scale-100 dark:scale-0 rotate-0 dark:-rotate-90 h-[1.2rem] w-[1.2rem]" />
          <Moon className="absolute transition-all scale-0 dark:scale-100 rotate-90 dark:rotate-0 h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {tTheme('System')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {tTheme('Light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {tTheme('Dark')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
