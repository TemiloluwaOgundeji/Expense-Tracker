"use client";

import { useState } from "react";

import { Expense } from "@/types/expense";
import ExpenseDetailsDrawer from "./ExpenseDetailsDrawer";

import { formatDate } from "@/lib/formatDate";
import { formatCurrency } from "@/lib/formatCurrency";

import { useSettings } from "@/contexts/SettingsContext";

interface ExpenseTableProps {
  expenses: Expense[];
}

export default function ExpenseTable({
  expenses,
}: ExpenseTableProps) {
  const [selectedExpense, setSelectedExpense] =
    useState<Expense | null>(null);

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const { currency } = useSettings();

  function openDrawer(expense: Expense) {
    setSelectedExpense(expense);
    setDrawerOpen(true);
  }

  function closeDrawer() {
    setDrawerOpen(false);
    setSelectedExpense(null);
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Description
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Paid By
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Date
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                onClick={() => openDrawer(expense)}
                className="cursor-pointer border-b border-slate-100 transition-colors duration-200 hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-medium text-slate-900">
                  {expense.description}
                </td>

                <td className="px-6 py-5 text-slate-600">
                  {expense.category}
                </td>

                <td className="px-6 py-5 text-slate-600">
                  {expense.paidBy}
                </td>

                <td className="px-6 py-5 text-slate-500">
                  {formatDate(expense.date)}
                </td>

                <td className="px-6 py-5 text-right text-lg font-semibold text-slate-900">
                  {formatCurrency(
                    expense.amount,
                    currency
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ExpenseDetailsDrawer
        expense={selectedExpense}
        open={drawerOpen}
        onClose={closeDrawer}
      />
    </>
  );
}