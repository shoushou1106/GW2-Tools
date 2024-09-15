"use client"

import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

import { zhcnSiteConfig } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button, buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center max-w-screen-2xl h-14">
        <MainNav items={zhcnSiteConfig.mainNav} />
        <MobileNav items={zhcnSiteConfig.mainNav} />
        <div className="flex flex-1 justify-between md:justify-end items-center space-x-2">
          <div className="flex-1 md:flex-none w-full md:w-auto"></div>
          <nav className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <div>
                    <Icons.qq className="w-8 h-8 fill-current" />
                    <span className="sr-only">QQ</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">QQ 群</h4>
                    <p className="text-sm text-muted-foreground">
                      准备弃用，不建议加入
                      <br />
                      点击二维码可查看原图
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="group-1">
                        <AccordionTrigger>社区版 1 群</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid gap-2">
                            <Label>群号：796783086</Label>
                            <Button
                              variant="outline"
                              onClick={() => {
                                navigator.clipboard.writeText("796783086")
                                toast("已复制群号")
                              }}
                            >
                              复制群号
                            </Button>
                            <Link
                              href="/zhcn/static/contract/qq/社区版1群_二维码.jpg"
                              target="_blank"
                            >
                              <AspectRatio ratio={3 / 4.5}>
                                <Skeleton className="object-cover w-full h-full rounded-lg" />
                                <Image
                                  src="/zhcn/static/contract/qq/社区版1群_二维码.jpg.webp"
                                  fill
                                  alt="加载失败，请尝试直接点击此处"
                                  className="object-cover rounded-lg"
                                />
                              </AspectRatio>
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="group-2">
                        <AccordionTrigger>社区版 2 群</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid gap-2">
                            <Label>群号：577513205</Label>
                            <Button
                              variant="outline"
                              onClick={() => {
                                navigator.clipboard.writeText("577513205")
                                toast("已复制群号")
                              }}
                            >
                              复制群号
                            </Button>
                            <Link
                              href="/zhcn/static/contract/qq/社区版2群_二维码.jpg"
                              target="_blank"
                            >
                              <AspectRatio ratio={3 / 4.5}>
                                <Skeleton className="object-cover w-full h-full rounded-lg" />
                                <Image
                                  src="/zhcn/static/contract/qq/社区版2群_二维码.jpg.webp"
                                  fill
                                  alt="加载失败，请尝试直接点击此处"
                                  className="object-cover rounded-lg"
                                />
                              </AspectRatio>
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="group-3">
                        <AccordionTrigger>社区版 3 群</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid gap-2">
                            <Label>群号：940656816</Label>
                            <Button
                              variant="outline"
                              onClick={() => {
                                navigator.clipboard.writeText("940656816")
                                toast("已复制群号")
                              }}
                            >
                              复制群号
                            </Button>
                            <Link
                              href="/zhcn/static/contract/qq/社区版3群_二维码.jpg"
                              target="_blank"
                            >
                              <AspectRatio ratio={3 / 4.5}>
                                <Skeleton className="object-cover w-full h-full rounded-lg" />
                                <Image
                                  src="/zhcn/static/contract/qq/社区版3群_二维码.jpg.webp"
                                  fill
                                  alt="加载失败，请尝试直接点击此处"
                                  className="object-cover rounded-lg"
                                />
                              </AspectRatio>
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Link
              href={zhcnSiteConfig.links.nexusmods}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.nexusmods className="w-5 h-5" />
                <span className="sr-only">Nexus mods</span>
              </div>
            </Link>
            <Link
              href={zhcnSiteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.github className="w-5 h-5 fill-current" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
