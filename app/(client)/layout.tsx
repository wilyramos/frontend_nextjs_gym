import { getCurrentUser } from "@/src/auth/currentUser";
import Link from "next/link";
import { Home, User, CreditCard, Dumbbell, Settings } from "lucide-react";
import React from "react";
import { redirect } from 'next/navigation';
import UserMenu from "@/src/components/common/UserMenu";
import Logo from "@/src/components/common/Logo";


export default async function Layout({ children }: { children: React.ReactNode }) {
    const user = await getCurrentUser();
    if (!user) redirect('/auth/login');


    const navItems = [
        { name: "Overview", href: "/overview", icon: <Home className="w-5 h-5" /> },
        { name: "Perfil", href: "/profile", icon: <User className="w-5 h-5" /> },
        { name: "Membresías", href: "/memberships", icon: <Dumbbell className="w-5 h-5" /> },
        { name: "Pagos", href: "/payments", icon: <CreditCard className="w-5 h-5" /> },
        { name: "Configuración", href: "/settings", icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header / Top Navigation */}
            <header className="hidden md:block bg-amber-300 text-black shadow-md">
                <div className="container mx-auto flex items-center justify-between max-w-5xl px-2">
                    <div className="flex gap-4">
                        <Logo />
                        <p className="text-sm mt-1">Hola, {user?.name || "Usuario"}</p>
                        <UserMenu />
                    </div>

                    <nav className="flex space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-1 px-3 py-2 rounded hover:bg-amber-200 transition text-xs font-medium" 
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto p-6 text-gray-800 max-w-3xl">{children}</main>

            {/* Footer */}
            <footer className="bg-black text-gray-300 text-center py-3">
                © {new Date().getFullYear()} Gym System. All rights reserved.
            </footer>
        </div>
    );
}
