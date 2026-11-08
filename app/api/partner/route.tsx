import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "")
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ")
const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export async function POST(req: Request) {
  try {
    const body: Record<string, unknown> = await req.json()
    const organisation = oneLine(str(body.organisation))
    const contactPerson = oneLine(str(body.contactPerson))
    const email = str(body.email)
    const phone = oneLine(str(body.phone))
    const orgType = oneLine(str(body.orgType))
    const message = str(body.message)

    // Honeypot: real people never fill this hidden field
    if (str(body.website)) return NextResponse.json({ ok: true })

    if (!organisation || !contactPerson || !email || !message) {
      return NextResponse.json({ error: "Please fill in your organisation, name, email and message." }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }
    if (organisation.length > 150 || contactPerson.length > 100 || email.length > 200 || phone.length > 30 || orgType.length > 150 || message.length > 3000) {
      return NextResponse.json({ error: "One of your answers is too long." }, { status: 400 })
    }

    const text = [
      "*** PARTNERSHIP REQUEST ***",
      "",
      `Organisation: ${organisation}`,
      `Type: ${orgType || "-"}`,
      `Contact person: ${contactPerson}`,
      `Email: ${email}`,
      `Phone/WhatsApp: ${phone || "-"}`,
      "",
      message,
    ].join("\n")

    const html = `
      <h2 style="margin:0 0 16px">PARTNERSHIP REQUEST</h2>
      <p><strong>Organisation:</strong> ${escapeHtml(organisation)}<br>
      <strong>Type:</strong> ${escapeHtml(orgType || "-")}<br>
      <strong>Contact person:</strong> ${escapeHtml(contactPerson)}<br>
      <strong>Email:</strong> ${escapeHtml(email)}<br>
      <strong>Phone/WhatsApp:</strong> ${escapeHtml(phone || "-")}</p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`

    const { error } = await resend.emails.send({
      from: "Grainsbank Partnerships <onboarding@resend.dev>",
      to: (process.env.PARTNER_TO_EMAIL || process.env.CONTACT_TO_EMAIL) as string,
      replyTo: email,
      subject: `[PARTNERSHIP REQUEST] ${organisation}${orgType ? ` (${orgType})` : ""}`,
      text,
      html,
    })

    if (error) {
      console.error(error)
      return NextResponse.json({ error: "We couldn't send your enquiry. Please try again." }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}