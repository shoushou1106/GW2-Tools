"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Turnstile } from "@marsidev/react-turnstile"
import { AlertCircle, Check } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  email: z.string().email({
    message: "请输入有效的电子邮件地址",
  }),
  optIn: z.boolean().refine((value) => value === true, {
    message: "您必须同意才能订阅",
  }),
  turnstileResponse: z.string().min(1, "请完成人机验证"),
})

const delFormSchema = z.object({
  email: z.string().email({
    message: "请输入有效的电子邮件地址",
  }),
  turnstileResponse: z.string().min(1, "请完成人机验证"),
})

export default function Page() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("提交时发生未知问题，请重试")

  const [delStatus, setDelStatus] = useState<"idle" | "success" | "error">(
    "idle"
  )
  const [delErrorMsg, setDelErrorMsg] = useState("提交时发生未知问题，请重试")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      optIn: false,
      turnstileResponse: "",
    },
  })

  const delForm = useForm<z.infer<typeof delFormSchema>>({
    resolver: zodResolver(delFormSchema),
    defaultValues: {
      email: "",
      turnstileResponse: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus("idle")
    try {
      if (values.email && values.optIn && values.turnstileResponse) {
        const response = await fetch("/zhcn/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: values.email }),
        })
        const data = await response.json()
        if (data.success) {
          setStatus("success")
        } else {
          setStatus("error")
          setErrorMsg(data.error || "提交时发生未知问题，请重试")
        }
      } else {
        setStatus("error")
        setErrorMsg("请确保表单已填写完成后重试")
      }
    } catch (error) {
      setStatus("error")
      setErrorMsg("提交时发生未知问题，请重试")
    }
  }

  async function onDelete(values: z.infer<typeof delFormSchema>) {
    setDelStatus("idle")
    try {
      if (values.email && values.turnstileResponse) {
        const response = await fetch("/zhcn/api/subscribe/delete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: values.email }),
        })
        const data = await response.json()
        if (data.success) {
          setDelStatus("success")
        } else {
          setDelStatus("error")
          setDelErrorMsg(data.error || "提交时发生未知问题，请重试")
        }
      } else {
        setDelStatus("error")
        setDelErrorMsg("请确保表单已填写完成后重试")
      }
    } catch (error) {
      setDelStatus("error")
      setDelErrorMsg("提交时发生未知问题，请重试")
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-5 p-5">
      <Card className="flex-1 mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>订阅</CardTitle>
          <CardDescription>
            通过电子邮件订阅花园战争 1 & 2 简体中文 Mod 的更新
          </CardDescription>
        </CardHeader>
        <CardContent>
          {(status === "idle" || status === "error") && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {status === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="w-4 h-4" />
                    <AlertTitle>错误</AlertTitle>
                    <AlertDescription>{errorMsg}</AlertDescription>
                  </Alert>
                )}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>电子邮件地址</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="optIn"
                  render={({ field }) => (
                    <FormItem className="flex space-y-0 space-x-2 items-top">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="grid gap-1.5 leading-none">
                        <FormLabel className="leading-none peer-disabled:opacity-70 peer-disabled:cursor-not-allowed">
                          我同意接收电子邮件通知并接受数据隐私声明
                        </FormLabel>
                        <FormDescription className="leading-none peer-disabled:opacity-70 peer-disabled:cursor-not-allowed">
                          您可以随时使用我们发送的电子邮件中的链接取消订阅
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="turnstileResponse"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Turnstile
                          siteKey={
                            process.env
                              .NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
                              ? process.env
                                  .NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
                              : "2x00000000000000000000AB"
                          }
                          onSuccess={(token) => field.onChange(token)}
                          onError={() => field.onChange("")}
                          onExpire={() => field.onChange("")}
                          className="overflow-x-auto"
                          style={{
                            width: "auto",
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="text-sm text-muted-foreground">
                  建议将 notify@shoushou1106.org 加入白名单，否则容易被收入垃圾邮件。<br/>
                  我使用 Resend
                  处理电子邮件。提交此表格即表示您同意您提供的个人数据将转交于
                  Resend 处理，并同意&nbsp;
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    Resend 隐私政策
                  </a>
                  。
                </p>
                <Button type="submit" className="w-min">
                  提交
                </Button>
              </form>
            </Form>
          )}
          {status === "success" && (
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-2">
                <Check className="w-8 h-8" />
                <Label className="text-2xl font-bold">
                  成功订阅！感谢您的支持
                </Label>
              </div>
              
              <Label className="text-lg font-medium">
                建议将 notify@shoushou1106.org 加入白名单，否则容易被收入垃圾邮件。
                </Label>
              <Button
                className="w-min"
                variant="outline"
                onClick={() => setStatus("idle")}
              >
                返回
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="flex-1 mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle>删除订阅</CardTitle>
          <CardDescription>取消订阅，并删除您的个人信息</CardDescription>
        </CardHeader>
        <CardContent>
          {(delStatus === "idle" || delStatus === "error") && (
            <Form {...delForm}>
              <form
                onSubmit={delForm.handleSubmit(onDelete)}
                className="space-y-4"
              >
                {delStatus === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="w-4 h-4" />
                    <AlertTitle>错误</AlertTitle>
                    <AlertDescription>{delErrorMsg}</AlertDescription>
                  </Alert>
                )}
                <FormField
                  control={delForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>电子邮件地址</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={delForm.control}
                  name="turnstileResponse"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Turnstile
                          siteKey={
                            process.env
                              .NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
                              ? process.env
                                  .NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
                              : "2x00000000000000000000AB"
                          }
                          onSuccess={(token) => field.onChange(token)}
                          onError={() => field.onChange("")}
                          onExpire={() => field.onChange("")}
                          className="overflow-x-auto"
                          style={{
                            width: "auto",
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="text-sm text-muted-foreground">
                  我使用 Resend
                  处理电子邮件。提交此表格即表示您同意您提供的个人数据将转交于
                  Resend 处理，并同意&nbsp;
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    Resend 隐私政策
                  </a>
                  。
                </p>
                <Button type="submit" className="w-min">
                  提交
                </Button>
              </form>
            </Form>
          )}
          {delStatus === "success" && (
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-2">
                <Check className="w-8 h-8" />
                <Label className="text-2xl font-bold">成功删除！</Label>
              </div>
              <Button
                className="w-min"
                variant="outline"
                onClick={() => setDelStatus("idle")}
              >
                返回
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
