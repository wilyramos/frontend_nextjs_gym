"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import AuthSheet from "../sheets/AuthSheet";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";


export default function MobileNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                >
                    <MdMenu size={28} />
                </Button>
            </SheetTrigger>

            <SheetContent className="p-2 flex flex-col">
                <SheetHeader className="flex items-center justify-between">
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    <ThemeToggle /> {/* 👈 toggle aquí */}
                </SheetHeader>

                <nav className="flex flex-col gap-6 mt-10 text-lg">
                    <AuthSheet />
                </nav>
            </SheetContent>
        </Sheet>
    );
}
