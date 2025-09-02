"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkEmailAction } from "@/app/(public)/auth/actions";
import Spinner from "../common/Spinner";
import ErrorMessage from "../common/ErrorMessage";


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
                className="w-full border px-3 py-2 rounded-xl bg-gray-200 border-b-gray-400 border-b-2"
                name="email"
            />

            {/* Mostrar errores debajo del input */}
            {state.errors.length > 0 && (
                <ErrorMessage>
                    {state.errors.map((err, idx) => (
                        <div key={idx}>{err}</div>
                    ))}
                </ErrorMessage>
            )}

            <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-xl h-10"
            >
                {isPending ? <Spinner /> : "Continuar"}
            </button>
        </form>
    );
}
