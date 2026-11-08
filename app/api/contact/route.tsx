import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "")
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ")

export async function POST(req: Request) {
  try {
    const body: Record<string, unknown> = await req.json()
    const name = oneLine(str(body.name))
    const email = str(body.email)
    const whatsapp = str(body.whatsapp)
    const commodity = str(body.commodity)
    const message = str(body.message)

    // Honeypot: real people never fill this hidden field
    if (str(body.website)) return NextResponse.json({ ok: true })

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill in your name, email and message." }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }
    if (name.length > 100 || email.length > 200 || whatsapp.length > 30 || commodity.length > 200 || message.length > 3000) {
      return NextResponse.json({ error: "One of your answers is too long." }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: "Grainsbank <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL as string,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp || "-"}\nCommodity: ${commodity || "-"}\n\n${message}`,
    })

    if (error) {
      console.error(error)
      return NextResponse.json({ error: "We couldn't send your message. Please try again." }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}