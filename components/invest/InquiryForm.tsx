"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { investInquirySchema, type InvestInquiryValues } from "@/lib/invest-schema";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InvestInquiryValues>({
    resolver: zodResolver(investInquirySchema),
    defaultValues: { inquiryType: "Investment" },
  });

  async function onSubmit(values: InvestInquiryValues) {
    setSubmitError(null);

    try {
      const response = await fetch("/api/invest-inquiry", {
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
          A member of our team will follow up directly within two business days.
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
        <label htmlFor="organization" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
          Organization (optional)
        </label>
        <Input id="organization" placeholder="Company, school, or fund name" {...register("organization")} />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="inquiryType" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
          I'm interested in
        </label>
        <Select id="inquiryType" {...register("inquiryType")}>
          <option value="Investment">Investment</option>
          <option value="Strategic Partnership">Strategic Partnership</option>
          <option value="Sponsorship">Sponsorship</option>
          <option value="Other">Other</option>
        </Select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/65">
          Message
        </label>
        <Textarea id="message" placeholder="Share a little about your organization or interest." {...register("message")} />
        {errors.message ? <p className="text-sm text-red-700/80">{errors.message.message}</p> : null}
      </div>

      {submitError ? <p className="text-sm text-red-700/80">{submitError}</p> : null}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send inquiry"}
      </Button>
    </form>
  );
}
