import z from "zod";
import { tr } from "zod/v4/locales";

export const profileSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Email must be a valid email address",
    }),
  bio: z
    .string({ required_error: "Bio is required" })
    .min(10, { message: "Bio must be at least 10 characters long" })
    .max(200, { message: "Bio must be at most 200 characters long" }),
});

export const interestsSchema = z.object({
  hoobies: z
    .array(z.string().min(1, { message: "At least one hobby is required" }))
    .min(1, { message: "At least one hobby is required" }),
  skills: z
    .array(z.string().min(1, { message: "At least one skill is required" }))
    .min(1, { message: "At least one skill is required" }),
  walk: z
    .string({ required_error: "Walk is required" })
    .refine((value) => value.trim() !== "", {
      message: "Walk is required",
    })
    .refine((value) => (value === "yes" ? true : false), {
      message: "Walk must be 'yes' or 'no'",
    }),
});
export const settingsSchema = z.object({
  notifications: z.boolean().default(false),
  theme: z.enum(["light", "dark"]).default("light"),
});

export const termsSchema = z.object({
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});
