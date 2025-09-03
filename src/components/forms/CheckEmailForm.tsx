"use client";

import { useActionState, useState, useEffect } from "react";
import { checkEmailAction } from "@/app/(public)/auth/actions";
import Spinner from "../common/Spinner";
import ErrorMessage from "../common/ErrorMessage";
import Link from "next/link";


type CheckEmailPageProps = {
    onNext: (next: "login" | "register", email: string) => void;
};

export default function CheckEmailForm({ onNext }: CheckEmailPageProps) {
    const [email, setEmail] = useState("");
    const [state, formAction, isPending] = useActionState(checkEmailAction, {
        errors: [],
        success: "",
        exists: undefined,
    });

    useEffect(() => {
        if (state.exists === true) {
            onNext("login", email);
        } else if (state.exists === false) {
            onNext("register", email);
        }
    }, [state.exists, email, onNext]);

    return (
        <form action={formAction} className="space-y-4 py-4">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo"
                className="w-full border px-3 py-2 rounded-xl bg-gray-200 border-b-gray-400 border-b-2"
                name="email"
            />

            {state.errors.length > 0 && (
                <div className="text-red-600 text-sm">
                    {state.errors.map((err, idx) => (
                        <ErrorMessage key={idx}>{err}</ErrorMessage>
                    ))}
                </div>
            )}

            <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-xl h-10"
            >
                {isPending ? <Spinner /> : "Continuar"}
            </button>

              <Link
                    href="/auth/forgot-password"
                    className="text-sm text-gray-600 hover:underline"
                >
                    Olvidé mi contraseña
                </Link>

        </form>
    );
}
