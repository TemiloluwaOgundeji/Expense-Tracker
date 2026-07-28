"use client";

import { useModal } from "@/contexts/ModalContext";

import Modal from "@/components/ui/Modal";
import ExpenseForm from "@/components/forms/ExpenseForm";
import { useExpenses } from "@/contexts/ExpenseContext";

export default function GlobalExpenseModal() {
  const { open, closeModal } = useModal();
  const { editingExpense, setEditingExpense } = useExpenses();

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
    </Modal>
  );
}