import { zhcnSiteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:py-0 md:px-8">
      <div className="container flex flex-col md:flex-row gap-4 justify-between items-center md:h-24">
        <p className="text-sm leading-loose text-center md:text-left text-balance text-muted-foreground">
          由&nbsp;
          <a
            href={zhcnSiteConfig.links.bilibili}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shoushou1106
          </a>
          &nbsp;用❤制作
        </p>
      </div>
    </footer>
  )
}
