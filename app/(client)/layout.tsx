import { getCurrentUser } from "@/src/auth/currentUser";
import React from "react";
import { redirect } from "next/navigation";
import NavBarUser from "@/src/components/common/NavBarUser";
import Sidebar from "@/src/components/common/Sidebar";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const user = await getCurrentUser();
    if (!user) redirect("/auth/login");

    return (
        <div className="flex flex-col min-h-screen">
            {/* Top Navbar */}
            <NavBarUser user={user} />

            {/* 📌 Contenedor principal */}
            <div className="flex flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 pt-6 pb-20 md:pb-6">
                <Sidebar />
                <main className="flex-1 md:pl-6">{children}</main>
            </div>
        </div>
    );
}
