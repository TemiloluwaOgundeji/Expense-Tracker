"use client";

import { useExpenses } from "@/contexts/ExpenseContext";

export default function Insights() {
  const { expenses } = useExpenses();

  const totalExpenses = expenses.length;

  const totalSpent = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const averageExpense =
    totalExpenses === 0
      ? 0
      : totalSpent / totalExpenses;

  const highestExpense =
    expenses.length === 0
      ? null
      : expenses.reduce((highest, expense) =>
          expense.amount > highest.amount
            ? expense
            : highest
        );

  const latestExpense =
    expenses.length === 0
      ? null
      : expenses[0];

  const categoryTotals: Record<string, number> = {};

  expenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      expense.amount;
  });

  const topCategory =
    Object.entries(categoryTotals).sort(
      (a, b) => b[1] - a[1]
    )[0];

  const youPaid = expenses
    .filter((expense) => expense.paidBy === "Me")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const partnerPaid = expenses
    .filter((expense) => expense.paidBy === "Partner")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const yourPercentage =
    totalSpent === 0
      ? 0
      : Math.round((youPaid / totalSpent) * 100);

  const partnerPercentage =
    totalSpent === 0
      ? 0
      : Math.round((partnerPaid / totalSpent) * 100);

  const Insight = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => (
    <div className="rounded-xl border border-slate-200 p-5">
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-xl font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Financial Insights
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Insight
          label="Total Expenses"
          value={totalExpenses.toString()}
        />

        <Insight
          label="Average Expense"
          value={`₦${Math.round(
            averageExpense
          ).toLocaleString()}`}
        />

        <Insight
          label="Largest Expense"
          value={
            highestExpense
              ? `${highestExpense.description} (₦${highestExpense.amount.toLocaleString()})`
              : "-"
          }
        />

        <Insight
          label="Top Category"
          value={topCategory?.[0] ?? "-"}
        />

        <Insight
          label="Latest Expense"
          value={
            latestExpense
              ? latestExpense.description
              : "-"
          }
        />

        <Insight
          label="You Paid"
          value={`${yourPercentage}%`}
        />

        <Insight
          label="Partner Paid"
          value={`${partnerPercentage}%`}
        />

        <Insight
          label="Total Spending"
          value={`₦${totalSpent.toLocaleString()}`}
        />
      </div>
    </div>
  );
}