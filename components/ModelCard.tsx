import Link from "next/link";
import type { Model } from "@/lib/types";

interface ModelCardProps {
  model: Model;
}

export default function ModelCard({ model }: ModelCardProps) {
  return (
    <Link
      href={`/models/${model.id}`}
      className="group block overflow-hidden border border-neutral-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl"
    >
      <div className="aspect-square w-full overflow-hidden bg-neutral-200">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-500 p-4 text-center text-xs font-medium text-neutral-100 transition-transform duration-500 ease-out group-hover:scale-110">
          Placeholder image: {model.imageLabel}
        </div>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="font-display text-lg font-semibold text-neutral-900 transition-colors duration-200 group-hover:text-orange-500">
          {model.title}
        </h3>
        <p className="text-sm text-neutral-600">{model.description}</p>

        <span className="inline-block rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600">
          {model.category}
        </span>

        <div className="flex items-center gap-1.5 pt-1 text-sm text-neutral-500">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            className="transition-all duration-300 ease-out group-hover:scale-110 group-hover:fill-orange-500 group-hover:stroke-orange-500"
          >
            <path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.2 5 5.6 5c1.9 0 3.4 1 4.4 2.5C11 6 12.5 5 14.4 5c3.4 0 5.1 3.1 3.6 6.7C19.5 16.4 12 21 12 21Z" />
          </svg>
          {model.likes.toLocaleString()}
        </div>
      </div>
    </Link>
  );
}
