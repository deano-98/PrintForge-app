"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-display text-xl font-semibold text-neutral-900 transition-opacity duration-200 hover:opacity-70 dark:text-neutral-100"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 2v6" strokeLinecap="round" />
        <path d="M8 5h8l-1.5 3h-5L8 5Z" />
        <path d="M4 15c0-2 2-2 2-2h12s2 0 2 2" strokeLinecap="round" />
        <path d="M4 19c0-2 2-2 2-2h12s2 0 2 2" strokeLinecap="round" />
      </svg>
      printforge
    </Link>
  );
}

const links = [
  { href: "/models", label: "3D Models" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
      <Logo />
      <div className="flex items-center gap-5 md:gap-8">
        <nav className="flex items-center gap-5 font-body text-sm font-semibold uppercase tracking-wide md:gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || pathname?.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`relative pb-1 transition-colors duration-200 ${
                  isActive
                    ? "text-orange-500"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-0 -bottom-[1px] h-[2px] bg-orange-500 transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
