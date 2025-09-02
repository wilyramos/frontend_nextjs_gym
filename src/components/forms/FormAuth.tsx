"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkEmailAction } from "@/app/(public)/auth/actions";

export default function CheckEmailPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [state, formAction, isPending] = useActionState(checkEmailAction, {
        errors: [],
        success: "",
        exists: undefined,
    });

    useEffect(() => {
        if (state.exists === true) {
            router.push(`/auth/login?email=${email}`); 
        } else if (state.exists === false) {
            router.push(`/auth/register?email=${email}`);
        }
    }, [state.exists, router]);

    return (
        <form action={formAction} className="space-y-4">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo"
                className="w-full border px-3 py-2 rounded bg-gray-200 border-b-gray-400 border-b-2"
                name="email"
            />

            {/* Mostrar errores debajo del input */}
            {state.errors.length > 0 && (
                <ul className="text-red-500 text-sm space-y-1">
                    {state.errors.map((err, idx) => (
                        <li key={idx}>• {err}</li>
                    ))}
                </ul>
            )}

            <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded"
            >
                {isPending ? "Verificando..." : "Continuar"}
            </button>
        </form>
    );
}
