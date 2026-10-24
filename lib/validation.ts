import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .max(30)
  .optional()
  .transform((value) => (value ? value : null));

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: phoneSchema,
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(5000),
});

export const donationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: phoneSchema,
  amount: z.coerce.number().int().min(100).max(10_000_000),
  frequency: z.enum(["once", "monthly"]),
  message: z.string().trim().max(1000).optional().transform((value) => value || null),
});
