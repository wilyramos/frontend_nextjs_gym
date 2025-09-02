"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { toast } from "sonner";
import { registerAction } from "@/app/(public)/auth/actions";
import Spinner from "../common/Spinner";

export default function RegisterForm() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

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
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Correo electrónico
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={email}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md bg-gray-100 text-gray-600"
                    readOnly
                />
            </div>

            {/* Nombre */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Nombre
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>

            {/* Contraseña */}
            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Contraseña
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>

            {/* Botón */}
            <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors h-10"
            >
                {isPending ? <Spinner /> : "Registrarme"}
            </button>
        </form>
    );
}
