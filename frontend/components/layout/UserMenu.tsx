"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { useProfile } from "@/contexts/ProfileContext";

interface UserMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function UserMenu({
  open,
  onClose,
}: UserMenuProps) {
  const { profile } = useProfile();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target as Node
        )
      ) {
        onClose();
      }
    }

    if (open) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-14 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
    >
      <div className="border-b border-slate-200 p-5">
        <p className="font-semibold text-slate-900">
          {profile.name}
        </p>

        <p className="truncate text-sm text-slate-500">
          {profile.email}
        </p>
      </div>

      <div className="p-2">
        <Link
          href="/settings"
          onClick={onClose}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-slate-100"
        >
          <User size={18} />
          Profile
        </Link>

        <Link
          href="/settings"
          onClick={onClose}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-slate-100"
        >
          <Settings size={18} />
          Settings
        </Link>

        <button
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
}