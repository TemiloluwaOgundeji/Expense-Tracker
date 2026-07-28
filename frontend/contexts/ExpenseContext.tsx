"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Expense } from "@/types/expense";

import {
  createExpense,
  getExpenses,
  updateExpense as updateExpenseApi,
  deleteExpense as deleteExpenseApi,
} from "@/services/expenseApi";

interface NewExpense {
  description: string;
  amount: number;
  category:
    | "Food"
    | "Transport"
    | "Shopping"
    | "Bills"
    | "Entertainment"
    | "Other";
  paidBy: "Me" | "Partner";
  date: string;
}

interface ExpenseContextType {
  expenses: Expense[];

  addExpense: (
    expense: NewExpense
  ) => Promise<void>;

  updateExpense: (
    expense: Expense
  ) => Promise<void>;

  deleteExpense: (
    id: string
  ) => Promise<void>;

  editingExpense: Expense | null;

  setEditingExpense: (
    expense: Expense | null
  ) => void;

  refreshExpenses: () => Promise<void>;

  isLoaded: boolean;
}

const ExpenseContext = createContext<
  ExpenseContextType | undefined
>(undefined);

export function ExpenseProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [expenses, setExpenses] =
    useState<Expense[]>([]);

  const [editingExpense, setEditingExpense] =
    useState<Expense | null>(null);

  const [isLoaded, setIsLoaded] =
    useState(false);

  async function refreshExpenses() {
    try {
      const data = await getExpenses();

      setExpenses(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    refreshExpenses();
  }, []);

  async function addExpense(
    expense: NewExpense
  ) {
    await createExpense(expense);

    await refreshExpenses();
  }

  async function updateExpense(
    expense: Expense
  ) {
    const {
      id,
      description,
      amount,
      category,
      paidBy,
      date,
    } = expense;

    await updateExpenseApi(id, {
      description,
      amount,
      category,
      paidBy,
      date,
    });

    setEditingExpense(null);

    await refreshExpenses();
  }

  async function deleteExpense(
    id: string
  ) {
    await deleteExpenseApi(id);

    if (editingExpense?.id === id) {
      setEditingExpense(null);
    }

    await refreshExpenses();
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
        editingExpense,
        setEditingExpense,
        refreshExpenses,
        isLoaded,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  const context =
    useContext(ExpenseContext);

  if (!context) {
    throw new Error(
      "useExpenses must be used inside ExpenseProvider"
    );
  }

  return context;
}