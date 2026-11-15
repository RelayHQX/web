"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

export interface NavbarProps {
  backHref?: string;
  backLabel?: string;
  title?: string;
  className?: string;
}

export function Navbar({
  backHref = "/",
  backLabel = "Home",
  title,
  className = "",
}: NavbarProps) {
  return (
    <nav
      className={`fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 pointer-events-none ${className}`}
    >
      <Link
        href={backHref}
        className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 shadow-2xl transition-all active:scale-95 shrink-0"
        aria-label={backLabel}
      >
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          size={14}
          className="shrink-0 text-white"
        />
        <span>{backLabel}</span>
      </Link>

      {title && (
        <div className="pointer-events-auto px-3.5 py-2 rounded-full text-xs font-medium text-neutral-400 bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl truncate max-w-37.5 sm:max-w-xs shrink-0">
          {title}
        </div>
      )}
    </nav>
  );
}
