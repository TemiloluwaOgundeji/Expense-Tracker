import { z } from "zod";

export const expenseSchema = z.object({
  description: z
    .string()
    .trim()
    .min(3, "Description must be at least 3 characters."),

  amount: z.coerce
    .number()
    .positive("Amount must be greater than zero."),

  date: z
    .string()
    .min(1, "Please select a date."),

  category: z.enum([
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Entertainment",
    "Other",
  ]),

  paidBy: z.enum([
    "Me",
    "Partner",
  ]),
});

export type ExpenseFormValues =
  z.infer<typeof expenseSchema>;