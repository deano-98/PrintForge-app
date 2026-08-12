import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({ href, children, variant = "outline", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-out will-change-transform active:scale-[0.97]";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    outline:
      "border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white hover:shadow-lg hover:-translate-y-0.5 dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:hover:text-neutral-900",
    primary:
      "border-2 border-orange-500 bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 hover:shadow-lg hover:-translate-y-0.5",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
