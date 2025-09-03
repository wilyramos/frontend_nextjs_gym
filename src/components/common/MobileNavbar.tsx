// MobileNavbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import AuthSheet from "../sheets/AuthSheet";
import Logo from "./Logo";

export default function MobileNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                    <MdMenu size={28} />
                </Button>
            </SheetTrigger>

            <SheetContent className="p-2 flex text-start">


                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-6 mt-10 text-lg">
                    <Link href="/" className="hover:text-gray-900 transition-colors">
                        Inicio
                    </Link>
                    <Link href="/pricing" className="hover:text-gray-900 transition-colors">
                        Planes
                    </Link>
                    <Link href="/about" className="hover:text-gray-900 transition-colors">
                        Nosotros
                    </Link>
                    <AuthSheet />
                </nav>
            </SheetContent>
        </Sheet>
    );
}
