"use client"

import * as React from "react"
import { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Check, AlertCircle } from 'lucide-react'
import { Turnstile } from '@marsidev/react-turnstile'
import { Resend } from 'resend';

const formSchema = z.object({
  email: z.string().email({
    message: "请输入有效的电子邮件地址",
  }),
  optIn: z.boolean().refine(value => value === true, {
    message: "您必须同意才能订阅",
  }),
  turnstileResponse: z.string().min(1, "请完成人机验证"),
})

const resend = new Resend(process.env.RESEND_API_KEY_SEND);

export default function Page() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('提交时发生未知问题，请重试')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      optIn: false,
      turnstileResponse: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus('idle')
    try {
      if (values.email && values.optIn && values.turnstileResponse) {
        const response = await resend.contacts.create({
          email: values.email,
          unsubscribed: false,
          audienceId: '25e4d7d5-549e-4c19-8dc0-18a3b29a01f6',
        });
        if (response.data) {
          setStatus('success')
        }
        else {
          setStatus('error')
          setErrorMsg(response.error ? response.error.message : '提交时发生未知问题，请重试')
        }
      } else {
        setStatus('error')
        setErrorMsg('请确保表单已填写完成后重试')
      }
    } catch (error) {
      setStatus('error')
      setErrorMsg('提交时发生未知问题，请重试')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>电子邮件订阅</CardTitle>
        <CardDescription>通过电子邮件订阅花园战争 1 & 2 简体中文 Mod 的更新</CardDescription>
      </CardHeader>
      <CardContent>
        { (status === 'idle' || status === 'error') && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            { status === 'error' && (
            <Alert variant="destructive" className="">
              <AlertCircle className="h-4 w-4" />
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
                <FormItem className="space-y-0 items-top flex space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="grid gap-1.5 leading-none">
                    <FormLabel className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      我同意接收电子邮件通知并接受数据隐私声明
                    </FormLabel>
                    <FormDescription className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
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
                      siteKey={process.env.PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY ? process.env.PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY : '1x00000000000000000000AA'}
                      onSuccess={(token) => field.onChange(token)}
                      onError={() => field.onChange("")}
                      onExpire={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm text-muted-foreground">
              我使用 Resend 处理电子邮件。提交此表格即表示您同意您提供的个人数据将转交于 Resend 处理，并同意&nbsp;
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
            <Button type="submit" className="w-min" >提交</Button>
          </form>
        </Form>
        )}
        {status === 'success' && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-2">
              <Check className="h-8 w-8" />
              <Label className="text-2xl font-bold">
                成功！感谢您的订阅
              </Label>
            </div>
            <Button className="w-min" variant='outline' onClick={() => setStatus('idle')}>重新提交</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
