"use client";

import { useExpenses } from "@/contexts/ExpenseContext";
import { useSettings } from "@/contexts/SettingsContext";
import { formatCurrency } from "@/lib/formatCurrency";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SpendingComparison() {
  const { expenses } = useExpenses();
  const { currency } = useSettings();

  const youPaid = expenses
    .filter((expense) => expense.paidBy === "Me")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const partnerPaid = expenses
    .filter((expense) => expense.paidBy === "Partner")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const data = [
    {
      name: "Me",
      amount: youPaid,
    },
    {
      name: "Partner",
      amount: partnerPaid,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Spending Comparison
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip
              formatter={(value) => [
                formatCurrency(
                  Number(value ?? 0),
                  currency
                ),
                "Amount",
              ]}
            />

            <Bar
              dataKey="amount"
              fill="#4F46E5"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}