"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import UserMenu from "../common/UserMenu";
import Logo from "../common/Logo";
import { ThemeToggle } from "../common/ThemeToggle";

import {
    Home,
    Users,
    Dumbbell,
    CreditCard,
    BarChart3,
    Calendar,
    Settings,
} from "lucide-react";
import {
    TbLayoutSidebarLeftCollapse,
    TbLayoutSidebarLeftExpand,
} from "react-icons/tb";

const NAV_LINKS = [
    { href: "/admin/dashboard", icon: Home, label: "Inicio" },
    { href: "/admin/members", icon: Users, label: "Clientes" },
    { href: "/admin/coaches", icon: Dumbbell, label: "Entrenadores" },
    { href: "/admin/plans", icon: Calendar, label: "Planes" },
    { href: "/admin/billing", icon: CreditCard, label: "Facturación" },
    { href: "/admin/reports", icon: BarChart3, label: "Reportes" },
    { href: "/admin/settings", icon: Settings, label: "Config" },
];

export default function GymSidebar() {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(false);

    return (
        <aside
            className={cn(
                "flex flex-col h-screen p-2 rounded-2xl shadow-lg border bg-white dark:bg-gray-900 transition-all duration-300",
                expanded ? "w-48" : "w-20"
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                {<Logo size={expanded ? 32 : 24} />}
                <button
                    onClick={() => setExpanded((e) => !e)}
                    className="p-1.5 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                    {expanded ? (
                        <TbLayoutSidebarLeftCollapse className="h-5 w-5" />
                    ) : (
                        <TbLayoutSidebarLeftExpand className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="mt-6 flex flex-col gap-2">
                {NAV_LINKS.map(({ href, icon: Icon, label }) => {
                    const active = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "relative flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                                active
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            <Icon className="h-5 w-5 shrink-0" />
                            {expanded && (
                                <span className="text-sm font-medium truncate">{label}</span>
                            )}
                            {!expanded && (
                                <span className="absolute left-full ml-2 px-2 py-1 text-xs rounded bg-popover text-popover-foreground shadow opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                    {label}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="mt-auto border-t pt-2 flex items-center justify-between text-xs text-muted-foreground">
                {expanded && (
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                        Gym Flow
                    </span>
                )}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <UserMenu />
                </div>
            </div>
        </aside>
    );
}