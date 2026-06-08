import { z } from "zod";

export const createProfileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters")
    .optional(),

  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters")
    .optional(),

  skills: z
    .array(z.string().trim())
    .max(20, "Maximum 20 skills allowed")
    .optional(),

  education: z
    .string()
    .trim()
    .max(200, "Education cannot exceed 200 characters")
    .optional(),

  experience: z
    .string()
    .trim()
    .max(500, "Experience cannot exceed 500 characters")
    .optional(),
});

export const updateProfileSchema = createProfileSchema.partial();