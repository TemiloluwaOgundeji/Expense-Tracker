"use client";

import { Download, Trash2, Database } from "lucide-react";
import { useExpenses } from "@/contexts/ExpenseContext";

export default function DataSettings() {
  const { expenses } = useExpenses();

  function handleExport() {
    alert("CSV export will be implemented next.");
  }

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all expenses? This action cannot be undone."
    );

    if (!confirmed) return;

    alert("Clear All Expenses will be implemented next.");
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Data Management
      </h2>

      <div className="space-y-6">
        {/* Statistics */}
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <Database
              size={22}
              className="text-indigo-600"
            />

            <div>
              <p className="font-semibold text-slate-900">
                Stored Expenses
              </p>

              <p className="text-sm text-slate-500">
                Total records in your expense tracker
              </p>
            </div>
          </div>

          <span className="text-2xl font-bold text-indigo-600">
            {expenses.length}
          </span>
        </div>

        {/* Export */}
        <button
          onClick={handleExport}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          <Download size={20} />
          Export Expenses (CSV)
        </button>

        {/* Clear */}
        <button
          onClick={handleClear}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-300 px-6 py-3 font-semibold text-red-600 transition hover:bg-red-50"
        >
          <Trash2 size={20} />
          Clear All Expenses
        </button>
      </div>
    </div>
  );
}