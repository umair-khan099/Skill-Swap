import { z } from "zod";

export const registerSchema = z
  .object({
    userName: z.string().trim().min(3).max(20),

    email: z.string().trim().email().toLowerCase(),

    password: z.string().min(6).max(32),
  })
  .strict();
