"use client";

import DashboardCard from "./DashboardCard";

import { useExpenses } from "@/contexts/ExpenseContext";
import { useSettings } from "@/contexts/SettingsContext";
import { formatCurrency } from "@/lib/formatCurrency";

export default function DashboardStats() {
  const { expenses } = useExpenses();
  const { currency } = useSettings();

  const totalSpent = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const youPaid = expenses
    .filter((expense) => expense.paidBy === "Me")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const partnerPaid = expenses
    .filter((expense) => expense.paidBy === "Partner")
    .reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <DashboardCard
        title="Total Spent"
        value={formatCurrency(totalSpent, currency)}
      />

      <DashboardCard
        title="You Paid"
        value={formatCurrency(youPaid, currency)}
      />

      <DashboardCard
        title="Partner Paid"
        value={formatCurrency(partnerPaid, currency)}
      />
    </div>
  );
}