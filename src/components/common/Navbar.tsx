// src/components/navbar/Navbar.tsx (SERVER COMPONENT)
import Link from "next/link";
import AuthSheet from "../sheets/AuthSheet";
import NavbarClient from "./NavbarClient";
import getToken from "@/src/auth/token";
import Logo from "./Logo";

export default async function Navbar() {
    const token = await getToken();

    const desktopLinks = (
        <>
            <Link href="/" className="text-gray-400 hover:text-gray-500 transition-colors">
                Inicio
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-gray-500 transition-colors">
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
                    className="text-2xl font-extrabold text-black-100 px-2 bg-amber-300 rounded"
                >
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {desktopLinks}
                    <div className="flex ">
                        {/* si hay token mostramos AuthSheet, si no login */}
                        {token ? <Link href="/profile " className="text-gray-400 hover:text-white hover:bg-black px-2 transition-colors">Mi cuenta</Link>
                            : <AuthSheet />
                        }
                    </div>
                </div>
            </div>
        </NavbarClient>
    );
}
