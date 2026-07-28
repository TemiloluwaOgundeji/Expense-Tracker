"use client";

import { useExpenses } from "@/contexts/ExpenseContext";
import StatCard from "@/components/ui/StatCard";

export default function SummaryCards() {
  const { expenses } = useExpenses();

  const totalSpent = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const average =
    expenses.length === 0
      ? 0
      : totalSpent / expenses.length;

  const highest =
    expenses.length === 0
      ? 0
      : Math.max(...expenses.map((e) => e.amount));

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const thisMonth = expenses
    .filter((expense) => {
      const date = new Date(expense.date);

      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    })
    .reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Spent"
        value={`₦${totalSpent.toLocaleString()}`}
        subtitle="All expenses"
      />

      <StatCard
        title="Average Expense"
        value={`₦${Math.round(average).toLocaleString()}`}
        subtitle="Per expense"
      />

      <StatCard
        title="Highest Expense"
        value={`₦${highest.toLocaleString()}`}
        subtitle="Largest payment"
      />

      <StatCard
        title="This Month"
        value={`₦${thisMonth.toLocaleString()}`}
        subtitle="Current month"
      />
    </div>
  );
}