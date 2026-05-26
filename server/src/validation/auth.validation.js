import { z } from "zod";

export const registerSchema = z.object({
  userName: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().password().min(6).max(32),
});

export const loginSchema = z.object({
  userName: z.string().min(3).max(20).optional(),
  email: z.string().email().optional(),
  password: z.string().password().min(6).max(32),
});

export const forGetSchema = z.object({
  email: z.string().email(),
  password: z.string().password().min(6).max(32),
});
