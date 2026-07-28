"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Receipt,
  ChartColumn,
  Settings,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Expenses",
    href: "/expenses",
    icon: Receipt,
  },
  {
    name: "Summary",
    href: "/summary",
    icon: ChartColumn,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col bg-slate-950 text-white shadow-2xl">
      {/* Logo */}
      <div className="border-b border-slate-800 px-6 py-7">
        <h1 className="text-3xl font-extrabold tracking-tight">
          SharedSpend
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Track expenses together
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-5">
        {links.map((link) => {
          const Icon = link.icon;

          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex items-center gap-4 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                active
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon
                size={21}
                className={`transition-colors ${
                  active
                    ? "text-white"
                    : "text-slate-400 group-hover:text-white"
                }`}
              />

              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 px-6 py-5">
        <p className="text-center text-sm text-slate-500">
          SharedSpend v1.0
        </p>
      </div>
    </aside>
  );
}