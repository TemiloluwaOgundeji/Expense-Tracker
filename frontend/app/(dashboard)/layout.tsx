"use client";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

import AddExpenseModal from "@/components/modals/AddExpenseModal";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="relative flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="relative flex-1 overflow-y-auto bg-slate-100 p-8">
          {children}

          <AddExpenseModal />
        </main>
      </div>
    </div>
  );
}