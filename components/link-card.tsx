import Link from "next/link";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

export interface LinkItem {
  href: string;
  title: string;
  icon: IconSvgElement;
  isExternal?: boolean;
}

export interface LinkCardProps {
  item: LinkItem;
}

export function LinkCard({ item }: LinkCardProps) {
  const isExternal = item.isExternal ?? item.href.startsWith("http");
  const TrailingIcon = isExternal ? ArrowUpRight01Icon : ArrowRight01Icon;

  return (
    <Link
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center justify-between px-4 py-3.5 hover:bg-black/5 dark:hover:bg-white/10 transition-colors group w-full sm:flex-col sm:justify-between sm:p-4 sm:h-26 sm:flex-1 sm:min-w-33.75"
    >
      {/* Mobile: icon + title row. Desktop: icon + arrow top row */}
      <div className="flex items-center gap-3 min-w-0 sm:w-full sm:justify-between">
        <HugeiconsIcon
          icon={item.icon}
          size={18}
          className="text-neutral-900 dark:text-white shrink-0 sm:w-5 sm:h-5"
        />
        <span className="text-sm font-medium text-neutral-900 dark:text-white truncate sm:hidden">
          {item.title}
        </span>
        <HugeiconsIcon
          icon={TrailingIcon}
          size={16}
          className="hidden sm:block text-neutral-400 group-hover:text-neutral-900 dark:text-white/40 dark:group-hover:text-white transition-colors shrink-0"
        />
      </div>

      {/* Mobile: arrow on right */}
      <HugeiconsIcon
        icon={TrailingIcon}
        size={16}
        className="sm:hidden text-neutral-400 group-hover:text-neutral-900 dark:text-white/40 dark:group-hover:text-white transition-colors shrink-0"
      />

      {/* Desktop: title placed at bottom */}
      <span className="hidden sm:block text-sm font-medium text-neutral-900 dark:text-white leading-snug w-full">
        {item.title}
      </span>
    </Link>
  );
}
