// File: layout.tsx

import React from "react";
import Navbar from "@/src/components/common/Navbar";
import MobileNavbar from "@/src/components/common/MobileNavbar";
import Logo from "@/src/components/common/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            {/* Desktop Navbar */}
            <div className="hidden md:block">
                <Navbar />
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden p-2 flex justify-between">
                <Logo />
                <MobileNavbar />
            </div>

            {/* Main content */}
            <main className="">{children}</main>
        </div>
    );
}