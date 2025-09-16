// src/components/navbar/Navbar.tsx (SERVER COMPONENT)
import Link from "next/link";
import AuthSheet from "../sheets/AuthSheet";
import NavbarClient from "./NavbarClient";
import getToken from "@/src/auth/token";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export default async function Navbar() {
    const token = await getToken();

    return (
        <NavbarClient>
            <div className="max-w-5xl mx-auto  flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-extrabold text-black-100 px-2  tracking-tight "
                >
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex ">
                        {/* si hay token mostramos AuthSheet, si no login */}
                        {token ? <Link href="/profile " className="text-black">Mi cuenta</Link>
                            : <AuthSheet />
                        }

                    </div>
                    <ThemeToggle />

                </div>

            </div>
        </NavbarClient>
    );
}