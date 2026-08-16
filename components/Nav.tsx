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
  // const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  //   document.documentElement.classList.toggle("dark");
  // };

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

      {/* Hamburger Toggle Button (Mobile Only < 640px) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-900 focus:outline-none dark:border-neutral-800 dark:text-white sm:hidden"
        aria-label="Toggle Menu"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-orange-500/70 px-6 py-6 backdrop-blur-md dark:border-neutral-800 dark:bg-orange-500/70 sm:hidden">
          <div className="flex flex-col gap-4 font-body text-base font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`py-1 transition-colors ${
                  pathname === href ? "text-orange-500" : "text-neutral-700 dark:text-neutral-300"
                }`}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}