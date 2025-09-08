"use client";

import { useEffect, useState } from "react";
import { useActionState } from "react";
import { toast } from "sonner";
import { registerAction } from "@/app/(public)/auth/actions";
import Spinner from "../common/Spinner";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function RegisterForm() {

    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo");


    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [state, dispatch, isPending] = useActionState(registerAction, {
        errors: [],
        success: "",
    });

    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach((err) => toast.error(err));
        }

    }, [state]);

    return (
        <form action={dispatch} className="space-y-5 max-w-md mx-auto">
            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>

            {/* Nombre */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                </label>
                <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>

            {/* Contraseña */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contraseña
                </label>
                <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>

            {/* Botones */}
            <div className="flex justify-between items-center">


                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 flex items-center justify-center h-10 w-30"
                >
                    {isPending ? <Spinner /> : "Registrarme"}
                </button>
            </div>

            <div>

                <Link
                    href={
                        `/auth/login${redirectTo ? `?redirectTo=${redirectTo}` : ""}`
                    }
                    className="text-sm text-gray-600 hover:underline"
                >
                    ¿Ya tienes una cuenta? Inicia sesión
                </Link>

            </div>
        </form>
    );
}