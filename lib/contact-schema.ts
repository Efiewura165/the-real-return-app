import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Enter a valid email address."),
  message: z.string().min(10, "Tell us a little more so a steward can help."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
