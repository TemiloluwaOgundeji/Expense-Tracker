"use client";

import { useMemo, useState } from "react";

import { useExpenses } from "@/contexts/ExpenseContext";
import { useModal } from "@/contexts/ModalContext";

import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";

import SearchBar from "@/components/expenses/SearchBar";
import FilterBar from "@/components/expenses/FilterBar";
import ExpenseTable from "@/components/expenses/ExpenseTable";

export default function ExpensesPage() {
  const { expenses } = useExpenses();
  const { openModal } = useModal();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [paidBy, setPaidBy] = useState("All");

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const matchesSearch =
        expense.description
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        expense.category
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        expense.paidBy
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        expense.category === category;

      const matchesPaidBy =
        paidBy === "All" ||
        expense.paidBy === paidBy;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPaidBy
      );
    });
  }, [expenses, search, category, paidBy]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Expenses"
          subtitle="Manage all shared expenses."
        />

        <Button onClick={openModal}>
          + Add Expense
        </Button>
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <FilterBar
        category={category}
        paidBy={paidBy}
        onCategoryChange={setCategory}
        onPaidByChange={setPaidBy}
      />

      {filteredExpenses.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            No expenses found
          </h2>

          <p className="mt-2 text-slate-500">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <ExpenseTable expenses={filteredExpenses} />
      )}
    </div>
  );
}