import { z } from "zod";

export const investInquirySchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Enter a valid email address."),
  organization: z.string().optional(),
  inquiryType: z.enum(["Strategic Partnership", "Sponsorship", "Investment", "Other"]),
  message: z.string().min(10, "Tell us a little more so our team can help."),
});

export type InvestInquiryValues = z.infer<typeof investInquirySchema>;
