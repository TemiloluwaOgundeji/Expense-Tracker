"use client";

interface DashboardCardProps {
  title: string;
  value: string;
}

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-sm font-medium text-slate-500">
        {title}
      </h3>

      <p className="mt-4 text-5xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}