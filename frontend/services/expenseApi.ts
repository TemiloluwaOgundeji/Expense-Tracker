import { Expense } from "@/types/expense";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:4000/expenses";

export async function getExpenses(): Promise<Expense[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    const error = await response.text();

    console.error("Backend Error:", error);

    throw new Error(error || "Failed to fetch expenses");
  }

  return response.json();
}

export async function createExpense(
  expense: Omit<Expense, "id" | "createdAt" | "updatedAt">
): Promise<Expense> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    const error = await response.json();

    console.error("Backend Error:", error);

    throw new Error(
      Array.isArray(error.message)
        ? error.message.join(", ")
        : error.message || "Failed to create expense"
    );
  }

  return response.json();
}

export async function updateExpense(
  id: string,
  expense: Partial<Expense>
): Promise<Expense> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  if (!response.ok) {
    const error = await response.json();

    console.error("Backend Error:", error);

    throw new Error(
      Array.isArray(error.message)
        ? error.message.join(", ")
        : error.message || "Failed to update expense"
    );
  }

  return response.json();
}

export async function deleteExpense(
  id: string
): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const error = await response.json();

    console.error("Backend Error:", error);

    throw new Error(
      Array.isArray(error.message)
        ? error.message.join(", ")
        : error.message || "Failed to delete expense"
    );
  }
}