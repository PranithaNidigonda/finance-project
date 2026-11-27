"use client";

import { Menu } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { APP_NAME } from "@/lib/constants";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <span className="text-sm font-semibold md:hidden">{APP_NAME}</span>
      </div>
      <Badge variant="brand">Phase 0 · Setup</Badge>
    </header>
  );
}