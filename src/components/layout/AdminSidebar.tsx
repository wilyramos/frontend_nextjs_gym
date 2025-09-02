"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

import Logo from "../common/Logo";

const links = [
    { href: "/admin/dashboard", icon: Home, label: "Inicio" },
    { href: "/admin/members", icon: Users, label: "Clientes" },
    { href: "/admin/coaches", icon: Dumbbell, label: "Entrenadores" },
    { href: "/admin/plans", icon: Calendar, label: "Planes" },
    { href: "/admin/billing", icon: CreditCard, label: "Facturación" },
    { href: "/admin/reports", icon: BarChart3, label: "Reportes" },
    { href: "/admin/settings", icon: Settings, label: "Configuración" },
];

export default function GymSidebar() {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(true);

    return (
        <aside
            className={cn(
                "h-screen flex flex-col bg-white border-r border-gray-300 transition-all duration-300",
                expanded ? "w-56" : "w-20"
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
                {expanded && <Logo className="text-lg font-bold text-gray-900" />}
                <button
                    onClick={() => setExpanded((e) => !e)}
                    className="p-2 rounded-md text-gray-500 hover:bg-gray-200"
                >
                    {expanded ? (
                        <TbLayoutSidebarLeftCollapse className="h-5 w-5" />
                    ) : (
                        <TbLayoutSidebarLeftExpand className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-2 py-4 space-y-2">
                {links.map(({ href, icon: Icon, label }) => {
                    const active = pathname === href;

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                active
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-700 hover:bg-gray-200 hover:text-black"
                            )}
                        >
                            <Icon className="h-5 w-5 shrink-0" />
                            {expanded ? (
                                <span>{label}</span>
                            ) : (
                                <span className="absolute left-full ml-2 rounded-md bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                                    {label}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="border-t border-gray-200 p-3 text-xs text-gray-500 text-center">
                {expanded ? "Gym Flow V4" : "⚡"}
            </div>
        </aside>
    );
}
