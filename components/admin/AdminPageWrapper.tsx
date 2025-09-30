// File: components/admin/AdminPageWrapper.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabItem {
    label: string;
    href: string;
}

interface AdminPageWrapperProps {
    title: string;
    actionButton?: React.ReactNode;
    tabs?: TabItem[];
    children: React.ReactNode;
}

export default function AdminPageWrapper({
    title,
    actionButton,
    tabs = [],
    children,
}: AdminPageWrapperProps) {
    const pathname = usePathname();

    return (
        <main className="space-y-6">
            {/* Encabezado */}
            <div className="flex items-center justify-between ">
                <h1 className="text-2xl font-bold">{title}</h1>
                {actionButton && <div>{actionButton}</div>}
            </div>

            {/* Tabs dinámicos */}
            {tabs.length > 0 && (
                <nav className="flex gap-6 border-b">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.href;
                        return (
                            <Link
                                key={tab.href}
                                href={tab.href}
                                className={`relative pb-2 text-sm font-medium transition-colors ${isActive
                                        ? "text-black font-semibold after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-red-600"
                                        : "text-gray-400 hover:text-black"
                                    }`}
                            >
                                {tab.label}
                            </Link>
                        );
                    })}
                </nav>
            )}

            {/* Contenido específico */}
            <section>{children}</section>
        </main>
    );
}