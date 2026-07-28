"use client";

import Modal from "@/components/ui/Modal";
import ExpenseForm from "@/components/forms/ExpenseForm";

import { useModal } from "@/contexts/ModalContext";
import { useExpenses } from "@/contexts/ExpenseContext";

export default function AddExpenseModal() {
  const { open, closeModal } = useModal();

  const {
    editingExpense,
    setEditingExpense,
  } = useExpenses();

  function handleClose() {
    setEditingExpense(null);
    closeModal();
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        {editingExpense ? "Edit Expense" : "Add Expense"}
      </h2>

      <ExpenseForm onSuccess={handleClose} />

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleClose}
          className="rounded-lg border border-slate-300 px-5 py-2 font-medium transition hover:bg-slate-100"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}