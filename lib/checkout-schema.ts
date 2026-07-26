import { z } from "zod";

export const shippingAddressSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Enter a valid email address."),
  addressLine1: z.string().min(3, "Enter your street address."),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "Enter your city."),
  state: z.string().min(1, "Enter your state or province."),
  postalCode: z.string().min(1, "Enter your postal code."),
  countryCode: z.string().length(2, "Use a 2-letter country code (e.g. US, GH)."),
});

export type ShippingAddressValues = z.infer<typeof shippingAddressSchema>;

export const captureOrderSchema = z.object({
  orderId: z.string().min(1),
  shipping: shippingAddressSchema,
});
