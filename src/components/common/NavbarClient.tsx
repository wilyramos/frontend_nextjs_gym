// src/components/navbar/NavbarClient.tsx
"use client";

import { useEffect, useState } from "react";

export default function NavbarClient({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(true); // si mostrar el navbar
    const [lastScrollY, setLastScrollY] = useState(0); // guardamos la última posición de scroll

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scroll hacia abajo → ocultar
                setShow(false);
            } else {
                // Scroll hacia arriba → mostrar
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300  backdrop-blur-md ${
                show ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            {children}
        </nav>
    );
}
