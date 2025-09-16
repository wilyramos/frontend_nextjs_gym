"use client";

import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet";
import LoginFormSheet from "@/src/components/forms/LoginFormSheet";
import RegisterForm from "@/src/components/forms/RegisterFormSheet";
import { FiUser } from "react-icons/fi";
import CheckEmailForm from "../forms/CheckEmailForm";

export default function AuthSheet() {
    const [view, setView] = useState<"check" | "login" | "register">("check");
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);

    const handleNext = (next: "login" | "register", enteredEmail: string) => {
        setEmail(enteredEmail);
        setView(next);
    };

    const renderForm = () => {
        switch (view) {
            case "check":
                return <CheckEmailForm onNext={handleNext} />;
            case "login":
                return (
                    <LoginFormSheet
                        initialEmail={email}
                        onBack={() => setView("check")}
                    />
                );
            case "register":
                return (
                    <RegisterForm
                        email={email}
                        onBack={() => setView("check")}
                    />
                );
            default:
                return null;
        }
    };

    const titles: Record<typeof view, string> = {
        check: "Bienvenido",
        login: "Login",
        register: "Registro",
    };

    const descriptions: Record<typeof view, string> = {
        check: "Ingresa tu correo para continuar",
        login: "Ingresa tus credenciales",
        register: "Crea tu cuenta",
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button
                    className="
                        flex items-center gap-2 px-4 py-2 
                        border-2 rounded-lg text-sm cursor-pointer
                        border-gray-300 dark:border-gray-600
                        bg-white dark:bg-gray-800
                        text-gray-900 dark:text-gray-100
                        hover:bg-gray-100 dark:hover:bg-gray-700
                    "
                >
                    <FiUser className="text-base" />
                    Iniciar sesión / registrarse
                </button>
            </SheetTrigger>

            <SheetContent
                className="
                    max-w-sm p-6
                    bg-white dark:bg-gray-900
                    text-gray-900 dark:text-gray-100
                "
            >
                <SheetHeader className="flex items-center justify-between">
                    <div>
                        <SheetTitle className="text-2xl font-bold">
                            {titles[view]}
                        </SheetTitle>
                        <SheetDescription className="text-gray-600 dark:text-gray-400">
                            {descriptions[view]}
                        </SheetDescription>
                    </div>
                </SheetHeader>

                <div className="mt-4">{renderForm()}</div>
            </SheetContent>
        </Sheet>
    );
}
