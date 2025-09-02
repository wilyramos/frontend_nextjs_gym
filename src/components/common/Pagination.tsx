"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    pathname: string;
};

export default function Pagination({ currentPage, totalPages, pathname }: PaginationProps) {
    const searchParams = useSearchParams();

    const createHref = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-end mt-8">
            <nav className="inline-flex items-center space-x-2">
                {currentPage > 1 && (
                    <Link href={createHref(currentPage - 1)} className="px-3 py-2 text-sm border rounded-lg">
                        &lt;
                    </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link
                        key={page}
                        href={createHref(page)}
                        className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition shadow-sm
            ${currentPage === page
                                ? "bg-black text-white shadow-md"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {page}
                    </Link>
                ))}

                {currentPage < totalPages && (
                    <Link href={createHref(currentPage + 1)} className="px-3 py-2 text-sm border rounded-lg">
                        &gt;
                    </Link>
                )}
            </nav>
        </div>
    );
}
