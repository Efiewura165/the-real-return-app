import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

interface RevalidateBody {
  _type: string;
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    console.warn("[revalidate] SANITY_REVALIDATE_SECRET is not set — rejecting webhook.");
    return Response.json({ revalidated: false, error: "Revalidation is not configured." }, { status: 503 });
  }

  try {
    const { isValidSignature, body } = await parseBody<RevalidateBody>(request, secret);

    if (!isValidSignature) {
      return Response.json({ revalidated: false, error: "Invalid signature." }, { status: 401 });
    }

    if (!body?._type) {
      return Response.json({ revalidated: false, error: "Missing document _type." }, { status: 400 });
    }

    // { expire: 0 } for immediate invalidation — this is called by an
    // external webhook right after a real edit, so the editor should see
    // their change reflected right away, not on the next stale-while-
    // revalidate visit (which is what profile: "max" would give us).
    revalidateTag(body._type, { expire: 0 });
    return Response.json({ revalidated: true, type: body._type, now: Date.now() });
  } catch (error) {
    console.error("[revalidate] Failed to process webhook", error);
    return Response.json({ revalidated: false, error: "Failed to process webhook." }, { status: 500 });
  }
}
