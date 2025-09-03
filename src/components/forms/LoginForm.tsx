"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useActionState } from "react";
import { authenticaAction } from "@/app/(public)/auth/actions";
import Spinner from "../common/Spinner";
import Link from "next/link";

type LoginFormProps = {
    initialEmail?: string;
    readOnlyEmail?: boolean;
    onBack?: () => void;
    onSuccess?: () => void;
};

export default function LoginForm({
    initialEmail = "",
    readOnlyEmail = false,
    onBack,
    onSuccess,
}: LoginFormProps) {
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState("");

    const [state, dispatch, isPending] = useActionState(authenticaAction, {
        errors: [],
        success: "",
    });

    // Mostrar errores o ejecutar callback onSuccess
    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach((err) => toast.error(err));
        }
        if (state.success && onSuccess) {
            onSuccess();
        }
    }, [state, onSuccess]);

    return (
        <form action={dispatch} className="space-y-6">
            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Correo</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    readOnly={readOnlyEmail}
                    className={`w-full px-3 py-2 rounded-md border-b-2 ${readOnlyEmail
                        ? "bg-gray-100 text-gray-600"
                        : "bg-gray-200 border-b-gray-400"
                        }`}
                    required
                />
            </div>

            {/* Contraseña */}
            <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full px-3 py-2 rounded-md bg-gray-200 border-b-2 border-b-gray-400"
                    required
                />
            </div>

            {/* Botones */}
            <div className="flex justify-between items-center">
                {onBack && (
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-sm text-gray-600 hover:underline"
                    >
                        Volver
                    </button>

                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 flex items-center justify-center h-10 w-30"
                >
                    {isPending ? <Spinner /> : "Ingresar"}
                </button>
            </div>

            <Link
                href="/auth/forgot-password"
                className="text-sm text-gray-600 hover:underline"
            >
                Olvidé mi contraseña
            </Link>
        </form>
    );
}
