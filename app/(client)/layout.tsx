import { getCurrentUser } from "@/src/auth/currentUser";
import React from "react";
import { redirect } from "next/navigation";
import NavBarUser from "@/src/components/common/NavBarUser";
import Sidebar from "@/src/components/common/Sidebar";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const user = await getCurrentUser();
    if (!user) redirect("/auth/login");

    return (
        <div className=" flex flex-col">
            {/* Top Navbar: Solo logo + nombre */}
            <NavBarUser user={user} />

            {/* Contenedor con sidebar + contenido */}
            <div className="flex flex-1 max-w-5xl mx-auto w-full py-10">
                <Sidebar />
                <main className="flex-1 px-10 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
