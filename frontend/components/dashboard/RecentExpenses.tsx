"use client";

import { useExpenses } from "@/contexts/ExpenseContext";
import { useSettings } from "@/contexts/SettingsContext";

import { formatCurrency } from "@/lib/formatCurrency";
import { formatDate } from "@/lib/formatDate";

export default function RecentExpenses() {
  const { expenses } = useExpenses();
  const { currency } = useSettings();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">
        Recent Expenses
      </h2>

      {expenses.length === 0 ? (
        <p className="mt-4 text-slate-500">
          No expenses yet.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {expenses.slice(0, 5).map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-slate-100"
            >
              <div>
                <h3 className="font-semibold text-slate-900">
                  {expense.description}
                </h3>

                <p className="text-sm text-slate-500">
                  {expense.category} • {expense.paidBy}
                </p>

                <p className="text-xs text-slate-400">
                  {formatDate(expense.date)}
                </p>
              </div>

              <div className="text-lg font-bold text-indigo-600">
                {formatCurrency(expense.amount, currency)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}