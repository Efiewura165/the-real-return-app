import { Resend } from "resend";

import { investInquirySchema } from "@/lib/invest-schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = investInquirySchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: "That submission didn't look right — please check the form and try again." }, { status: 400 });
  }

  const { name, email, organization, inquiryType, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.INVEST_TO_EMAIL || process.env.CONTACT_TO_EMAIL || "hello@therealreturn.com";
  const orgLine = organization ? `Organization: ${organization}\n` : "";

  if (!apiKey) {
    console.warn(
      `[invest-inquiry] RESEND_API_KEY is not set — this message was NOT delivered.\n` +
        `Set RESEND_API_KEY (and optionally INVEST_TO_EMAIL, CONTACT_FROM_EMAIL) to enable delivery.\n` +
        `Inquiry (${inquiryType}) from ${name} <${email}>:\n${orgLine}${message}`,
    );
    return Response.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "The Real Return <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New ${inquiryType.toLowerCase()} inquiry from ${name}`,
      text: `From: ${name} <${email}>\nInquiry type: ${inquiryType}\n${orgLine}\n${message}`,
    });

    if (error) {
      console.error("[invest-inquiry] Resend rejected the message", error);
      return Response.json({ error: "We couldn't send your message. Please try again or email us directly." }, { status: 502 });
    }

    return Response.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[invest-inquiry] Failed to send email", error);
    return Response.json({ error: "We couldn't send your message. Please try again or email us directly." }, { status: 502 });
  }
}
