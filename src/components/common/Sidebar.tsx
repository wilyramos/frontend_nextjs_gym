"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiHome,
    FiUser,
    FiCreditCard,
} from "react-icons/fi";
import {
    FaHome,
    FaUser,
    FaCreditCard,
    FaDumbbell,
} from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi"; // outline dumbbell

export default function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        {
            name: "Overview",
            href: "/overview",
            icon: FiHome,
            iconFill: FaHome,
        },
        {
            name: "Perfil",
            href: "/profile",
            icon: FiUser,
            iconFill: FaUser,
        },
        {
            name: "Membresías",
            href: "/memberships",
            icon: GiWeightLiftingUp,
            iconFill: FaDumbbell,
        },
        {
            name: "Pagos",
            href: "/payments",
            icon: FiCreditCard,
            iconFill: FaCreditCard,
        },
    ];

    return (
        <>
            {/* 📌 Desktop sidebar */}
            <aside className="hidden md:flex md:flex-col w-52 border-r bg-background">
                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = isActive ? item.iconFill : item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded-md transition
                  ${isActive
                                        ? "font-semibold text-foreground bg-accent"
                                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* 📌 Mobile bottom nav */}
            <aside className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background z-50">
                <nav className="flex justify-around py-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = isActive ? item.iconFill : item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex flex-col items-center gap-1 px-3 py-1 rounded-md transition
                  ${isActive
                                        ? "font-semibold text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="text-xs">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}
