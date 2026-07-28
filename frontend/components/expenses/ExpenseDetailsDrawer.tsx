"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

import { Expense } from "@/types/expense";
import { useExpenses } from "@/contexts/ExpenseContext";
import { useModal } from "@/contexts/ModalContext";
import { useSettings } from "@/contexts/SettingsContext";

import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { formatCurrency } from "@/lib/formatCurrency";
import { formatDate } from "@/lib/formatDate";

interface ExpenseDetailsDrawerProps {
  expense: Expense | null;
  open: boolean;
  onClose: () => void;
}

export default function ExpenseDetailsDrawer({
  expense,
  open,
  onClose,
}: ExpenseDetailsDrawerProps) {
  const {
    setEditingExpense,
    deleteExpense,
  } = useExpenses();

  const { currency } = useSettings();

  const { openModal } = useModal();

  const [confirmOpen, setConfirmOpen] =
    useState(false);

  if (!open || !expense) {
    return null;
  }

  function handleEdit() {
    setEditingExpense(expense);

    onClose();

    openModal();
  }

  async function handleDelete() {
    if (!expense) return;

    try {
      await deleteExpense(expense.id);

      toast.success(
        "Expense deleted successfully."
      );

      setConfirmOpen(false);

      onClose();
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to delete expense."
      );
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Expense Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 space-y-6 p-6">
          <Detail
            label="Description"
            value={expense.description}
          />

          <Detail
            label="Amount"
            value={formatCurrency(
              expense.amount,
              currency
            )}
          />

          <Detail
            label="Category"
            value={expense.category}
          />

          <Detail
            label="Paid By"
            value={expense.paidBy}
          />

          <Detail
            label="Date"
            value={formatDate(expense.date)}
          />
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-6">
          <button
            onClick={handleEdit}
            className="mb-3 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Edit Expense
          </button>

          <button
            onClick={() => setConfirmOpen(true)}
            className="w-full rounded-xl border border-red-300 py-3 font-semibold text-red-600 transition hover:bg-red-50"
          >
            Delete Expense
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={confirmOpen}
        title="Delete Expense"
        message={`Are you sure you want to delete "${expense.description}"? This action cannot be undone.`}
        confirmText="Delete Expense"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => setConfirmOpen(false)}
      />
    </>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}