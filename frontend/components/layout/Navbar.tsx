"use client";

import { ChevronDown } from "lucide-react";
import { useProfile } from "@/contexts/ProfileContext";

export default function Navbar() {
  const { profile } = useProfile();

  return (
    <header className="flex h-20 items-center justify-end border-b border-slate-200 bg-white px-8 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-lg font-semibold text-slate-900">
            Welcome back
          </p>

          <p className="text-sm text-slate-500">
            {profile.name}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
          {profile.name.charAt(0).toUpperCase()}
        </div>

        <ChevronDown
          size={18}
          className="text-slate-500"
        />
      </div>
    </header>
  );
}