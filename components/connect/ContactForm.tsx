"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Enter a valid email address."),
  message: z.string().min(10, "Tell us a little more so a steward can help."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    console.info("Contact request", values);
    setStatus("submitted");
    reset();
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
        <label htmlFor="name" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/60">
          Name
        </label>
        <Input id="name" placeholder="Your full name" {...register("name")} />
        {errors.name ? <p className="text-sm text-red-700/80">{errors.name.message}</p> : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/60">
          Email
        </label>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
        {errors.email ? <p className="text-sm text-red-700/80">{errors.email.message}</p> : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/60">
          Message
        </label>
        <Textarea id="message" placeholder="Share where you are in the journey and how a steward can help." {...register("message")} />
        {errors.message ? <p className="text-sm text-red-700/80">{errors.message.message}</p> : null}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
