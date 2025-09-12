"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiHome,
    FiUser,
    FiCreditCard,
    FiSettings,
} from "react-icons/fi";
import {
    FaHome,
    FaUser,
    FaCreditCard,
    FaDumbbell,
    FaCog,
} from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi"; // dumbbell outline
import React from "react";

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
        {
            name: "Configuración",
            href: "/settings",
            icon: FiSettings,
            iconFill: FaCog,
        },
    ];

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="hidden md:flex md:flex-col w-48 text-gray-200">
                <nav className="flex-1 p-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = isActive ? item.iconFill : item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-2 px-3 py-2 rounded leading-relaxed  transition 
                  ${isActive
                                        ? " font-bold text-gray-800"
                                        : "text-gray-500 hover:bg-gray-100 hover:text-black"
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
