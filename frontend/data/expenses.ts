import { Expense } from "@/types/expense";

export const initialExpenses: Expense[] = [
  {
    id: "1",
    description: "Dinner",
    amount: 8500,
    category: "Food",
    paidBy: "Me",
    date: "2026-07-14",
    createdAt: new Date().toISOString(),
  },

  {
    id: "2",
    description: "Uber",
    amount: 4200,
    category: "Transport",
    paidBy: "Partner",
    date: "2026-07-13",
    createdAt: new Date().toISOString(),
  },
];