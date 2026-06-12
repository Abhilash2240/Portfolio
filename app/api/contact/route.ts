import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(20),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = schema.parse(body)

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // If no API key, still return success in dev mode (just log)
      console.log('[Contact Form] Dev mode — no RESEND_API_KEY set')
      console.log({ name, email, subject, message })
      return NextResponse.json({ success: true, dev: true })
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from:    'Portfolio Contact <onboarding@resend.dev>',
      to:      'abhilashgundelli830@gmail.com',
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; padding: 2rem; background: #FDF8EE; border: 3px double #C9A84C;">
          <h2 style="font-family: 'Playfair Display', Georgia, serif; color: #1A1208; border-bottom: 1px solid #C9A84C; padding-bottom: 1rem;">
            New Message from ${name}
          </h2>
          <dl style="margin: 1.5rem 0;">
            <dt style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #C9A84C; margin-bottom: 2px;">From</dt>
            <dd style="margin: 0 0 1rem; color: #1A1208;">${name} &lt;${email}&gt;</dd>
            <dt style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #C9A84C; margin-bottom: 2px;">Subject</dt>
            <dd style="margin: 0 0 1rem; color: #1A1208;">${subject}</dd>
            <dt style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #C9A84C; margin-bottom: 2px;">Message</dt>
            <dd style="margin: 0; color: #1A1208; white-space: pre-wrap; line-height: 1.7;">${message}</dd>
          </dl>
          <p style="font-size: 0.75rem; color: #7E766D; border-top: 1px solid #CFC5BB; padding-top: 1rem; margin-top: 2rem;">
            Sent from Gundelli Abhilash Portfolio — Kinetic Archive Ver. 1.0
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', issues: err.issues }, { status: 400 })
    }
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
