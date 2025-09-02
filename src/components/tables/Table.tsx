// File: frontend/src/components/tables/Table.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

export function Table({
    className,
    ...props
}: React.HTMLAttributes<HTMLTableElement>) {
    return (
        <div className="w-full overflow-x-auto rounded-2xl bg-white">
            <table
                className={cn(
                    "w-full text-sm md:text-base border-separate border-spacing-0",
                    className
                )}
                {...props}
            />
        </div>
    );
}

export function TableHeader({
    className,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
    return (
        <thead
            className={cn(
                "bg-gradient-to-r from-gray-50 to-gray-100 text-xs md:text-sm text-gray-600 uppercase tracking-wider",
                className
            )}
            {...props}
        />
    );
}

export function TableBody({
    className,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
    return (
        <tbody
            className={cn(
                "divide-y divide-gray-100 [&>tr:last-child]:border-b-0",
                className
            )}
            {...props}
        />
    );
}

export function TableRow({
    className,
    ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
    return (
        <tr
            className={cn(
                "transition-colors hover:bg-gray-50 even:bg-gray-50/40 cursor-pointer",
                className
            )}
            {...props}
        />
    );
}

export function TableHead({
    className,
    ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
    return (
        <th
            className={cn(
                "px-6 py-4 text-left font-semibold text-gray-700 whitespace-nowrap",
                className
            )}
            {...props}
        />
    );
}

export function TableCell({
    className,
    ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
    return (
        <td
            className={cn(
                "px-6 py-4 text-gray-800 whitespace-nowrap align-middle",
                className
            )}
            {...props}
        />
    );
}
