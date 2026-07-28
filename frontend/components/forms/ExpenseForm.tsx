"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

import { useExpenses } from "@/contexts/ExpenseContext";
import { useSettings } from "@/contexts/SettingsContext";

interface ExpenseFormProps {
  onSuccess?: () => void;
}

export default function ExpenseForm({
  onSuccess,
}: ExpenseFormProps) {
  const {
    addExpense,
    updateExpense,
    editingExpense,
    setEditingExpense,
  } = useExpenses();

  const { currency } = useSettings();

  const currencySymbol =
    currency === "NGN"
      ? "₦"
      : currency === "USD"
      ? "$"
      : "€";

  const [description, setDescription] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [date, setDate] =
    useState("");

  const [category, setCategory] =
    useState("Food");

  const [paidBy, setPaidBy] =
    useState("Me");

  useEffect(() => {
    if (editingExpense) {
      setDescription(
        editingExpense.description
      );

      setAmount(
        editingExpense.amount.toString()
      );

      // If the backend returns an ISO date, trim it for the date input
      setDate(
        editingExpense.date.includes("T")
          ? editingExpense.date.split("T")[0]
          : editingExpense.date
      );

      setCategory(
        editingExpense.category
      );

      setPaidBy(
        editingExpense.paidBy
      );
    }
  }, [editingExpense]);

  function resetForm() {
    setDescription("");
    setAmount("");
    setDate("");
    setCategory("Food");
    setPaidBy("Me");
    setEditingExpense(null);
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (
      description.trim() === "" ||
      amount.trim() === "" ||
      date === ""
    ) {
      toast.error(
        "Please fill in all required fields."
      );
      return;
    }

    if (Number(amount) <= 0) {
      toast.error(
        "Amount must be greater than zero."
      );
      return;
    }

    try {
      if (editingExpense) {
        await updateExpense({
          ...editingExpense,
          description:
            description.trim(),
          amount: Number(amount),
          category: category as
            | "Food"
            | "Transport"
            | "Shopping"
            | "Bills"
            | "Entertainment"
            | "Other",
          paidBy: paidBy as
            | "Me"
            | "Partner",
          date,
        });

        toast.success(
          "Expense updated successfully."
        );
      } else {
        await addExpense({
          description:
            description.trim(),
          amount: Number(amount),
          category: category as
            | "Food"
            | "Transport"
            | "Shopping"
            | "Bills"
            | "Entertainment"
            | "Other",
          paidBy: paidBy as
            | "Me"
            | "Partner",
          date,
        });

        toast.success(
          "Expense added successfully."
        );
      }

      resetForm();
      onSuccess?.();
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to save expense."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        label="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        placeholder="Dinner"
      />

      <Input
        label={`Amount (${currencySymbol})`}
        type="number"
        min="0.01"
        step="0.01"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
        placeholder={
          currency === "NGN"
            ? "5000"
            : "100"
        }
      />

      <Input
        label="Date"
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <Select
        label="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        options={[
          { label: "Food", value: "Food" },
          {
            label: "Transport",
            value: "Transport",
          },
          {
            label: "Shopping",
            value: "Shopping",
          },
          {
            label: "Bills",
            value: "Bills",
          },
          {
            label: "Entertainment",
            value: "Entertainment",
          },
          {
            label: "Other",
            value: "Other",
          },
        ]}
      />

      <Select
        label="Paid By"
        value={paidBy}
        onChange={(e) =>
          setPaidBy(e.target.value)
        }
        options={[
          {
            label: "Me",
            value: "Me",
          },
          {
            label: "Partner",
            value: "Partner",
          },
        ]}
      />

      <div className="flex justify-end pt-4">
        <Button type="submit">
          {editingExpense
            ? "Update Expense"
            : "Save Expense"}
        </Button>
      </div>
    </form>
  );
}
