import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const response = await resend.contacts.create({
      email: email,
      audienceId: "25e4d7d5-549e-4c19-8dc0-18a3b29a01f6",
      unsubscribed: false,
    })

    if (response.data) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: response.error?.name + ": " + response.error?.message,
        },
        { status: 400 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "提交时发生未知问题，请重试" },
      { status: 500 }
    )
  }
}
