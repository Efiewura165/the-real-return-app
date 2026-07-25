import { newsletterSchema } from "@/lib/newsletter-schema";

/**
 * Scaffolding: accepts and validates signups but does not yet forward them to
 * a real email service provider. Wire up an ESP (Resend audiences, Mailchimp,
 * etc.) here before relying on this for real subscriber capture.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  console.warn(`[newsletter] No ESP configured — signup was NOT stored. Email: ${parsed.data.email}`);

  return Response.json({ ok: true, delivered: false });
}
