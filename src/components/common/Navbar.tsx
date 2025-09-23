// SERVER COMPONENT
import Link from "next/link";
import NavbarClient from "./NavbarClient";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import getToken from "@/src/auth/token";
import { FaRegUser } from "react-icons/fa";

export default async function Navbar() {
    const token = await getToken();

    return (
        <NavbarClient>
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extrabold tracking-tight">
                    <Logo />
                </Link>

                {/* Sección derecha: login/profile + ThemeToggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href={token ? "/profile" : "/auth/login"}
                        className="border p-2 rounded-md transition
                       hover:bg-gray-200 hover:text-black
                       dark:hover:bg-gray-700 dark:hover:text-white"
                        aria-label={token ? "Perfil de usuario" : "Ir a login"}
                    >
                        {token ? <FaRegUser className="w-4 h-4" /> : "Login"}
                    </Link>

                    <ThemeToggle />
                </div>
            </div>
        </NavbarClient>
    );
}
