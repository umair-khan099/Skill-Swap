import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().trim().email().toLowerCase(),
    password: z.string().min(6).max(32),
  })
  .strict();