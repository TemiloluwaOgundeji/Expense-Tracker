"use client";

import { useModal } from "@/contexts/ModalContext";

export default function QuickActions() {
  const { openModal } = useModal();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">
        Quick Actions
      </h2>

      <button
        onClick={openModal}
        className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-3 text-white transition hover:bg-indigo-700"
      >
        + Add Expense
      </button>
    </div>
  );
}