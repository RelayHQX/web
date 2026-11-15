"use client";

import { useTheme } from "./theme-provider";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Sun01Icon,
  Moon02Icon,
  ComputerIcon,
} from "@hugeicons/core-free-icons";

export interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, resolvedTheme, toggleTheme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className={`inline-flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-xl border border-black/5 dark:border-white/10 w-9 h-9 shrink-0 ${className}`}
      />
    );
  }

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";
  const tooltip = `${label} (${theme === "system" ? "Device default" : theme} mode). Right-click for device default.`;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      onContextMenu={(e) => {
        e.preventDefault();
        setTheme("system");
      }}
      className={`group relative inline-flex items-center justify-center rounded-full text-neutral-900 dark:text-white bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-sm dark:shadow-2xl transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 cursor-pointer shrink-0 ${
        showLabel ? "px-3.5 py-2" : "w-9 h-9"
      } ${className}`}
      aria-label={label}
      title={tooltip}
    >
      <HugeiconsIcon
        icon={isDark ? Sun01Icon : Moon02Icon}
        size={16}
        className="transition-transform duration-300 group-hover:rotate-12 group-active:scale-90 shrink-0 text-neutral-900 dark:text-white"
      />
      {showLabel && (
        <span className="text-xs font-medium capitalize">
          {theme === "system" ? `System (${resolvedTheme})` : theme}
        </span>
      )}
    </button>
  );
}

export function ThemeSegmentedToggle({
  className = "",
}: {
  className?: string;
}) {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`inline-flex items-center gap-1 p-1 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 h-9 w-28 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const options: Array<{
    value: "light" | "system" | "dark";
    label: string;
    icon: typeof Sun01Icon;
  }> = [
    { value: "light", label: "Light", icon: Sun01Icon },
    { value: "system", label: "Device Default", icon: ComputerIcon },
    { value: "dark", label: "Dark", icon: Moon02Icon },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      className={`inline-flex items-center gap-0.5 p-1 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 ${className}`}
    >
      {options.map((opt) => {
        const isActive = theme === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => setTheme(opt.value)}
            title={opt.label}
            className={`p-1.5 rounded-full transition-all duration-150 cursor-pointer ${
              isActive
                ? "bg-white text-neutral-950 dark:bg-neutral-800 dark:text-white shadow-sm"
                : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            }`}
          >
            <HugeiconsIcon icon={opt.icon} size={15} />
            <span className="sr-only">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
