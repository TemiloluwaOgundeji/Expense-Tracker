export interface Expense {
  id: string;

  description: string;

  amount: number;

  category:
    | "Food"
    | "Transport"
    | "Shopping"
    | "Bills"
    | "Entertainment"
    | "Other";

  paidBy: "Me" | "Partner";

  date: string;

  createdAt: string;
}