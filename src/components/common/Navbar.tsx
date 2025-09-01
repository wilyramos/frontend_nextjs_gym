"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold text-gray-100 border bg-black px-2">
                    Go<span className="text-slate-50">GYM</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        Planes
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        Nosotros
                    </Link>
                    <Link
                        href="/auth"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                                <MdMenu size={28} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-white text-gray-800">
                            <SheetHeader>
                                <SheetTitle className="text-gray-900">Menú</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-6 mt-10 text-lg">
                                <Link href="/" className="hover:text-gray-900 transition-colors">
                                    Inicio
                                </Link>
                                <Link href="/pricing" className="hover:text-gray-900 transition-colors">
                                    Planes
                                </Link>
                                <Link href="/about" className="hover:text-gray-900 transition-colors">
                                    Nosotros
                                </Link>
                                <Link href="/auth/login" className="hover:text-gray-900 transition-colors">
                                    Login
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
