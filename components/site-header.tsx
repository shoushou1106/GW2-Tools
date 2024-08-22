'use client'

import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <div>
                    <Icons.qq className="h-8 w-8 fill-current"/>
                    <span className="sr-only">QQ</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">QQ 群</h4>
                    <p className="text-sm text-muted-foreground">
                      准备弃用，不建议加入<br/>
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
                            <Button variant="outline"
                              onClick={() =>
                                {
                                  navigator.clipboard.writeText("796783086")
                                  toast("已复制群号")
                                }
                              }>
                              复制群号
                            </Button>
                            <Link
                              href="/static/images/contract/qq/社区版1群_二维码.jpg"
                              target="_blank"
                            >
                              <AspectRatio ratio={3 / 4.5}>
                                <Image src="/static/images/contract/qq/社区版1群_二维码.jpg" fill alt="QQ群二维码" className="rounded-lg object-cover" />
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
                            <Button variant="outline"
                              onClick={() =>
                                {
                                  navigator.clipboard.writeText("577513205")
                                  toast("已复制群号")
                                }
                              }>
                              复制群号
                            </Button>
                            <Link
                              href="/static/images/contract/qq/社区版2群_二维码.jpg"
                              target="_blank"
                            >
                              <AspectRatio ratio={3 / 4.5}>
                                <Image src="/static/images/contract/qq/社区版2群_二维码.jpg" fill alt="QQ群二维码" className="rounded-lg object-cover" />
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
                            <Button variant="outline"
                              onClick={() =>
                                {
                                  navigator.clipboard.writeText("940656816")
                                  toast("已复制群号")
                                }
                              }>
                              复制群号
                            </Button>
                            <Link
                              href="/static/images/contract/qq/社区版3群_二维码.jpg"
                              target="_blank"
                            >
                              <AspectRatio ratio={3 / 4.5}>
                                <Image src="/static/images/contract/qq/社区版3群_二维码.jpg" fill alt="QQ群二维码" className="rounded-lg object-cover" />
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
              href={siteConfig.links.nexusmods}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.nexusmods className="h-5 w-5 fill-current"/>
                <span className="sr-only">Nexus mods</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.paratranz}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.paratranz className="h-7 w-8 fill-current"/>
                <span className="sr-only">ParaTranz</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.github className="h-5 w-5 fill-current"/>
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
