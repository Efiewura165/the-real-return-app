"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setSubmitError(data?.error ?? "We couldn't send your message. Please try again or email us directly.");
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
        <p className="font-serif text-xl text-foreground">Thank you for reaching out.</p>
        <p className="mt-2 text-sm leading-7 text-foreground/70">
          A steward will be in touch within two business days. In the meantime, feel free to explore the journey.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
          Name
        </label>
        <Input id="name" placeholder="Your full name" {...register("name")} />
        {errors.name ? <p className="text-sm text-red-700/80">{errors.name.message}</p> : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
          Email
        </label>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
        {errors.email ? <p className="text-sm text-red-700/80">{errors.email.message}</p> : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
          Message
        </label>
        <Textarea id="message" placeholder="Share where you are in the journey and how a steward can help." {...register("message")} />
        {errors.message ? <p className="text-sm text-red-700/80">{errors.message.message}</p> : null}
      </div>

      {submitError ? <p className="text-sm text-red-700/80">{submitError}</p> : null}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
