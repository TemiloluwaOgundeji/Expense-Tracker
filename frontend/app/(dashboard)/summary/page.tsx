"use client";

import PageHeader from "@/components/ui/PageHeader";

import SummaryCards from "@/components/summary/SummaryCards";
import MonthlyChart from "@/components/summary/MonthlyChart";
import CategoryPieChart from "@/components/summary/CategoryPieChart";
import SpendingComparison from "@/components/summary/SpendingComparison";
import Insights from "@/components/summary/Insights";

export default function SummaryPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Summary"
        subtitle="Visual insights into your spending habits."
      />

      <SummaryCards />

      <div className="grid gap-6 xl:grid-cols-2">
        <MonthlyChart />
        <CategoryPieChart />
      </div>

      <SpendingComparison />

      <Insights />
    </div>
  );
}