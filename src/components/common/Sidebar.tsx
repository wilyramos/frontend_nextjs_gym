"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiHome,
    FiUser,
    FiCreditCard
} from "react-icons/fi";
import {
    FaHome,
    FaUser,
    FaCreditCard,
    FaDumbbell
} from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi"; // dumbbell outline

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
            icon: GiWeightLiftingUp, // outline dumbbell
            iconFill: FaDumbbell, // solid dumbbell
        },
        {
            name: "Pagos",
            href: "/payments",
            icon: FiCreditCard,
            iconFill: FaCreditCard,
        },
    ];

    return (
        <div className="flex max-w-2xl md:max-w-none min-h-[600px] md:min-h-0">
            {/* Sidebar */}
            <aside className="hidden md:flex md:flex-col w-48">
                <nav className="flex-1 p-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = isActive ? item.iconFill : item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition
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
        </div>
    );
}
