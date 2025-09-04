import { getCurrentUser } from "@/src/auth/currentUser";
import Link from "next/link";
import { Home, User, CreditCard, Dumbbell, Settings } from "lucide-react";
import React from "react";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const user = await getCurrentUser();

    const navItems = [
        { name: "Overview", href: "/overview", icon: <Home className="w-5 h-5" /> },
        { name: "Perfil", href: "/dashboard/profile", icon: <User className="w-5 h-5" /> },
        { name: "Membresías", href: "/dashboard/memberships", icon: <Dumbbell className="w-5 h-5" /> },
        { name: "Pagos", href: "/dashboard/payments", icon: <CreditCard className="w-5 h-5" /> },
        { name: "Configuración", href: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header / Top Navigation */}
            <header className="bg-amber-300 text-black shadow-md">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <div>
                        <h1 className="text-2xl font-bold">GoGYM</h1>
                        <p className="text-sm mt-1">Hola, {user?.name || "Usuario"}</p>
                    </div>

                    <nav className="flex space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-1 px-3 py-2 rounded hover:bg-amber-200 transition"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto p-6 text-gray-800">{children}</main>

            {/* Footer */}
            <footer className="bg-black text-gray-300 text-center py-3">
                © {new Date().getFullYear()} Gym System. All rights reserved.
            </footer>
        </div>
    );
}
