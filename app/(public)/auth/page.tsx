"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { checkEmailAction } from "./actions";

export default function VerifyEmailPage() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // Crear el FormData correctamente
        const formData = new FormData();
        formData.set("email", email);

        const exists = await checkEmailAction(formData);

        if (exists) {
            router.push(`/auth/login?email=${encodeURIComponent(email)}`);
        } else {
            router.push(`/auth/register?email=${encodeURIComponent(email)}`);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Iniciar sesión o Registrarse
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingresa tu correo"
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded"
                    >
                        Continuar
                    </button>
                </form>
            </div>
        </div>
    );
}
