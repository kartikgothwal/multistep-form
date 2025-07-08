import z from "zod";
 



export const settingsSchema = z.object({
  notifications: z.boolean().default(false),
  theme: z.enum(["light", "dark"]).default("light"),
});

export const termsSchema = z.object({
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});
