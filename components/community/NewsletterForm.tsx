"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/newsletter-schema";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  async function onSubmit(values: NewsletterFormValues) {
    setSubmitError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setSubmitError(data?.error ?? "That didn't go through — please try again.");
        return;
      }

      setStatus("submitted");
      reset();
    } catch {
      setSubmitError("We couldn't reach the server. Please check your connection and try again.");
    }
  }

  if (status === "submitted") {
    return (
      <div className="rounded-[0.2rem] border border-black/10 bg-[#f8f2e8]/80 p-6">
        <p className="font-serif text-xl text-foreground">You're on the list.</p>
        <p className="mt-2 text-sm leading-7 text-foreground/70">We'll be in touch as the community grows.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row sm:items-start" noValidate>
      <div className="flex-1 space-y-1.5">
        <Input id="newsletter-email" type="email" placeholder="you@example.com" aria-label="Email address" {...register("email")} />
        {errors.email ? <p className="text-sm text-red-700/80">{errors.email.message}</p> : null}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Joining…" : "Join the list"}
      </Button>
    </form>
  );
}
