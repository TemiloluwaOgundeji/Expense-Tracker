"use client";

import {
  Info,
  Code2,
  BadgeInfo,
} from "lucide-react";

export default function AboutSettings() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        About
      </h2>

      <div className="space-y-5">
        {/* App */}
        <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
          <Info
            className="mt-1 text-indigo-600"
            size={22}
          />

          <div>
            <h3 className="font-semibold text-slate-900">
              Expense Tracker
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Version 1.0.0
            </p>
          </div>
        </div>

        {/* Built With */}
        <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
          <Code2
            className="mt-1 text-indigo-600"
            size={22}
          />

          <div>
            <h3 className="font-semibold text-slate-900">
              Built With
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Next.js • React • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>

        {/* Application */}
        <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
          <Info
            className="mt-1 text-indigo-600"
            size={22}
          />

          <div>
            <h3 className="font-semibold text-slate-900">
              Application
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              A modern expense tracking application for managing shared expenses between partners.
            </p>
          </div>
        </div>

        {/* Roadmap */}
        <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
          <BadgeInfo
            className="mt-1 text-indigo-600"
            size={22}
          />

          <div>
            <h3 className="font-semibold text-slate-900">
              Roadmap
            </h3>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-500">
              <li>User Authentication</li>
              <li>Cloud Synchronization</li>
              <li>Recurring Expenses</li>
              <li>Budget Planning</li>
              <li>Receipt Uploads</li>
              <li>Mobile Application</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved.
        </div>
      </div>
    </div>
  );
}