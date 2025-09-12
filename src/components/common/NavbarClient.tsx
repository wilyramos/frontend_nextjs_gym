// src/components/navbar/NavbarClient.tsx
"use client";

import { useEffect, useState } from "react";

export default function NavbarClient({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState(true); // mostrar u ocultar navbar
    const [lastScrollY, setLastScrollY] = useState(0); // última posición de scroll
    const [isTop, setIsTop] = useState(true); // si estamos en la parte superior

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Ocultar o mostrar navbar según dirección del scroll
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShow(false);
            } else {
                setShow(true);
            }

            // Cambiar estado de isTop
            setIsTop(currentScrollY === 0);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
                ${show ? "translate-y-0" : "-translate-y-full text-black"}
                ${isTop ? "bg-transparent text-white" : "bg-white shadow-xs text-black"}
            `}
        >
            {children}
        </nav>
    );
}
