"use client";

import DashboardStats from "@/components/dashboard/DashboardStats";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentExpenses from "@/components/dashboard/RecentExpenses";

import { useExpenses } from "@/contexts/ExpenseContext";

export default function DashboardPage() {
  const { isLoaded } = useExpenses();

  if (!isLoaded) {
    return (
      <div className="p-8">
        <div className="h-10 w-64 animate-pulse rounded bg-slate-200" />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="h-36 animate-pulse rounded-2xl bg-slate-200" />
          <div className="h-36 animate-pulse rounded-2xl bg-slate-200" />
          <div className="h-36 animate-pulse rounded-2xl bg-slate-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Welcome back! Here's an overview of your shared expenses.
        </p>
      </div>

      <DashboardStats />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentExpenses />
        </div>

        <QuickActions />
      </div>
    </div>
  );
}