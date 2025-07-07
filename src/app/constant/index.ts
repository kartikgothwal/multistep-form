import z from "zod";

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
