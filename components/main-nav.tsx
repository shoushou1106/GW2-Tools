"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { zhcnSiteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex mr-4">
      <Link href="/" className="flex items-center mr-4 lg:mr-6 space-x-2">
        <Image
          src="/zhcn/favicon.png.webp"
          alt="logo"
          width={3000}
          height={3000}
          className="w-6 h-6"
        />
        <span className="hidden lg:inline-block font-bold">
          {zhcnSiteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-4 lg:gap-6 items-center text-sm">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
