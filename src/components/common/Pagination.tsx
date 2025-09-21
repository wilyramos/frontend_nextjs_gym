"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    pathname: string;
};

export default function Pagination({
    currentPage,
    totalPages,
    pathname,
}: PaginationProps) {
    const searchParams = useSearchParams();

    const createHref = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    // Build a compact list of pages to show
    const pages: (number | string)[] = [];
    const maxVisible = 7; // total buttons including ellipsis

    if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        const left = Math.max(2, currentPage - 1);
        const right = Math.min(totalPages - 1, currentPage + 1);

        pages.push(1);
        if (left > 2) pages.push("…");

        for (let i = left; i <= right; i++) pages.push(i);

        if (right < totalPages - 1) pages.push("…");
        pages.push(totalPages);
    }

    return (
        <div className="flex justify-center mt-10">
            <nav
                className="inline-flex items-center gap-1 rounded-xl bg-white/70 shadow ring-1 ring-gray-200 backdrop-blur-md p-1"
                aria-label="Pagination"
            >
                {/* Prev */}
                <Link
                    href={createHref(Math.max(currentPage - 1, 1))}
                    aria-disabled={currentPage === 1}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition 
            ${currentPage === 1
                            ? "pointer-events-none opacity-40"
                            : "hover:bg-gray-100 hover:text-gray-900"
                        }`}
                >
                    ‹
                </Link>

                {/* Pages + ellipsis */}
                {pages.map((p, idx) =>
                    typeof p === "number" ? (
                        <Link
                            key={idx}
                            href={createHref(p)}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition
                ${currentPage === p
                                    ? "bg-gray-900 text-white shadow-sm"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                        >
                            {p}
                        </Link>
                    ) : (
                        <span
                            key={idx}
                            className="flex h-9 w-9 items-center justify-center text-gray-400"
                        >
                            {p}
                        </span>
                    )
                )}

                {/* Next */}
                <Link
                    href={createHref(Math.min(currentPage + 1, totalPages))}
                    aria-disabled={currentPage === totalPages}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition
            ${currentPage === totalPages
                            ? "pointer-events-none opacity-40"
                            : "hover:bg-gray-100 hover:text-gray-900"
                        }`}
                >
                    ›
                </Link>
            </nav>
        </div>
    );
}
