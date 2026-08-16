"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-neutral-900 transition-opacity duration-200 hover:opacity-70 dark:text-neutral-100"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2v6" strokeLinecap="round" />
        <path d="M8 5h8l-1.5 3h-5L8 5Z" />
        <path d="M4 15c0-2 2-2 2-2h12s2 0 2 2" strokeLinecap="round" />
        <path d="M4 19c0-2 2-2 2-2h12s2 0 2 2" strokeLinecap="round" />
      </svg>
      Printforge
    </Link>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/models", label: "3D Models" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:py-8">
      <Logo />

      {/* Desktop Navigation (Hidden on < 640px) */}
      <nav className="hidden items-center gap-8 font-body text-sm font-semibold uppercase tracking-wide sm:flex">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors ${
              pathname === href ? "text-orange-500" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      {/* Animated Hamburger/X Button (Mobile Only < 640px) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-neutral-200 text-neutral-900 focus:outline-none dark:border-neutral-800 dark:text-white sm:hidden"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Dropdown (Industry standard height & touch spacing) */}
      <div
        className={`absolute right-6 top-[calc(100%-0.5rem)] z-50 w-1/3 min-w-50 rounded-2xl border border-neutral-200 bg-black/80 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out dark:border-neutral-800 dark:bg-neutral-950/95 sm:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col items-end gap-5 text-right font-body text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`py-1.5 transition-colors ${
                pathname === href ? "font-semibold text-orange-500" : "text-neutral-200 dark:text-neutral-300"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex w-full justify-end border-t border-orange-200/60 pt-3 dark:border-orange-800/60">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}