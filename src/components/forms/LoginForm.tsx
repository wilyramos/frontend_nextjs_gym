"use client";

import { useActionState, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { authenticaAction } from "@/app/(public)/auth/actions";
import Spinner from "../common/Spinner";

export default function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialEmail = searchParams.get("email") || "";

    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState("");

    const [state, dispatch, isPending] = useActionState(authenticaAction, {
        errors: [],
        success: "",
    });

    useEffect(() => {
        if (!initialEmail) {
            router.push("/auth");
        }
    }, [initialEmail, router]);

    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach((err) => toast.error(err));
        }

        if (state.success) {
            toast.success(state.success);
        }
    }, [state]);

    return (
        <form action={dispatch} className="space-y-5 max-w-md mx-auto">
            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-xs font-medium text-black mb-1"
                >
                    Correo
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full border px-3 py-2 rounded bg-gray-200 border-b-gray-400 border-b-2"
                />
            </div>

            {/* Contraseña */}
            <div>
                <label
                    htmlFor="password"
                    className="block text-xs font-medium text-black mb-1"
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
                    className="w-full border px-3 py-2 rounded bg-gray-200 border-b-gray-400 border-b-2"
                />
            </div>

            {/* Botón */}
            <button
                type="submit"
                disabled={isPending}
                className="w-full bg-black text-white py-2 h-10 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
                {isPending ? <Spinner /> : "Ingresar"}
            </button>
        </form>
    );
}