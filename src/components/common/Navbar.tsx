"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AuthSheet from "../sheets/AuthSheet";

interface NavbarClientProps {
    isLoggedIn: boolean;
}

export default function NavbarClient({ isLoggedIn }: NavbarClientProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const desktopLinks = (
        <>
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Inicio</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Planes</Link>
        </>
    );

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold text-gray-100  bg-gray-900 px-2">
                    Go<span className="text-amber-300">GYM</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {desktopLinks}
                    {!isLoggedIn && <AuthSheet />}
                </div>
            </div>
        </nav>
    );
}
