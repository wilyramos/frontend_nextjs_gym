"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavbarClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Ocultar o mostrar navbar según dirección del scroll
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShow(false);
            } else {
                setShow(true);
            }

            setIsTop(currentScrollY === 0);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
        ${isHome
                    ? isTop
                        // Home en la parte superior → transparente
                        ? "bg-transparent"
                        // Home scrolleada → color dependiente del tema
                        : "bg-white/90 dark:bg-gray-900/90 shadow"
                    // Otras rutas → color dependiente del tema
                    : "bg-white/90 dark:bg-gray-900/90 shadow"
                }
      `}
        >
            {children}
        </nav>
    );
}
