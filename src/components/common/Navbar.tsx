// src/components/navbar/Navbar.tsx (SERVER COMPONENT)
import Link from "next/link";
import AuthSheet from "../sheets/AuthSheet";
import NavbarClient from "./NavbarClient";
import getToken from "@/src/auth/token";

export default async function Navbar() {
    const token = await getToken();

    const desktopLinks = (
        <>
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Inicio
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
                Planes
            </Link>
        </>
    );

    return (
        <NavbarClient>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-extrabold text-gray-100 bg-gray-900 px-2"
                >
                    Go<span className="text-amber-300">GYM</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {desktopLinks}
                    <div className="flex">
                        {/* si hay token mostramos AuthSheet, si no login */}
                        {token ? <Link href="/profile " className="border rounded-md font-semibold border-gray-700 bg-black text-white px-2 py-1">Mi cuenta</Link>
                            : <AuthSheet />
                        }
                    </div>
                </div>
            </div>
        </NavbarClient>
    );
}
