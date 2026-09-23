import { z } from "zod";

export type CustomerReview = {
  id: string;
  name?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  locale: "fr" | "en" | "ar";
  consentToPublish: boolean;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

// Honeypot field for anti-spam
export const reviewFormSchema = z.object({
  name: z
    .string()
    .trim()
    .max(50, "Name too long")
    .optional()
    .or(z.literal("")),
  rating: z.number().min(1, "Rating required").max(5, "Invalid rating"),
  comment: z
    .string()
    .trim()
    .min(10, "Comment too short")
    .max(500, "Comment too long"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent required",
  }),
  // Honeypot - must remain empty
  website: z.string().max(0, "Spam detected"),
});

export type ReviewFormInput = z.infer<typeof reviewFormSchema>;
