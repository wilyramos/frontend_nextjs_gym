"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import UserMenu from "../common/UserMenu";
import Logo from "../common/Logo";

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
import { ThemeToggle } from "../common/ThemeToggle";

type NavLink = {
    href: string;
    label: string;
    icon: React.ElementType;
};

const NAV_LINKS: NavLink[] = [
    { href: "/admin/dashboard", icon: Home, label: "Inicio" },
    { href: "/admin/members", icon: Users, label: "Clientes" },
    { href: "/admin/coaches", icon: Dumbbell, label: "Entrenadores" },
    { href: "/admin/plans", icon: Calendar, label: "Planes" },
    { href: "/admin/billing", icon: CreditCard, label: "Facturación" },
    { href: "/admin/reports", icon: BarChart3, label: "Reportes" },
    { href: "/admin/settings", icon: Settings, label: "Config" },
];

function SidebarLink({
    href,
    icon: Icon,
    label,
    active,
    expanded,
}: {
    href: string;
    icon: React.ElementType;
    label: string;
    active: boolean;
    expanded: boolean;
}) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative flex flex-col items-center justify-center gap-1 rounded-md px-2 py-2 text-center transition-colors",
                active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
            )}
        >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {expanded && (
                <span className="text-xs font-medium leading-tight truncate">
                    {label}
                </span>
            )}
            {!expanded && (
                <span className="absolute left-full ml-2 rounded bg-popover text-popover-foreground shadow text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    {label}
                </span>
            )}
        </Link>
    );
}

export default function GymSidebar() {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(false);

    return (
        <aside
            className={cn(
                "h-screen flex flex-col border-r bg-background transition-all duration-300 group/sidebar",
                expanded ? "w-24" : "w-20"
            )}
            role="navigation"
            aria-label="Sidebar"
        >
            {/* Header */}
            <div className="flex items-center h-14 px-3 border-b relative">
                {/* Logo visible siempre, pero desaparece en hover si está colapsado */}
                <Logo
                    className={cn(
                        "text-base font-semibold transition-opacity",
                        !expanded && "group-hover/sidebar:opacity-0"
                    )}
                />

                {/* Botón al lado del logo si expandido, o en hover cuando está colapsado */}
                <button
                    onClick={() => setExpanded((e) => !e)}
                    className={cn(
                        "ml-auto p-1.5 rounded-md text-muted-foreground hover:bg-accent transition-opacity",
                        expanded
                            ? "opacity-100 relative"
                            : "absolute left-3 opacity-0 group-hover/sidebar:opacity-100"
                    )}
                    aria-label={expanded ? "Contraer menú" : "Expandir menú"}
                >
                    {expanded ? (
                        <TbLayoutSidebarLeftCollapse className="h-5 w-5" />
                    ) : (
                        <TbLayoutSidebarLeftExpand className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col items-center gap-3 py-4">
                {NAV_LINKS.map((link) => (
                    <SidebarLink
                        key={link.href}
                        href={link.href}
                        icon={link.icon}
                        label={link.label}
                        active={pathname === link.href}
                        expanded={expanded}
                    />
                ))}
            </nav>

            {/* Footer */}
            <div className="border-t px-3 py-3 flex items-center justify-between text-xs text-muted-foreground">
                {expanded && <span className="font-medium">Gym Flow</span>}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <UserMenu />
                </div>
            </div>
        </aside>
    );
}
