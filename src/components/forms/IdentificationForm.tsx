"use client";

import { EditUserAction } from "@/app/(public)/checkout/person/actions";
import type { TUser } from "@/src/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

type Props = {
    user: TUser | null;
};

export default function IdentificationForm({ user }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const plan = searchParams.get("plan"); // 👈 aquí obtienes el valor del query param

    const [state, dispatch] = useActionState(EditUserAction, {
        errors: [],
        success: "",
    });

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
            console.log("User updated successfully, redirecting...");
            router.push(`/checkout/payment?plan=${plan}`); // 👈 rediriges con el mismo plan
        }
    }, [state, router, plan]);

    return (
        <div>
            <form action={dispatch} className="flex flex-col gap-4">
                {/* Nombre */}
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-semibold">
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ingresa tu nombre"
                        className="p-3 rounded-md border border-gray-300"
                        defaultValue={user?.name || ""}
                    />
                </div>

                {/* Correo */}
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-semibold">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Ej: correo@ejemplo.com"
                        className="p-3 rounded-md border border-gray-300 bg-slate-100"
                        defaultValue={user?.email || ""}
                        readOnly
                    />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-semibold">Teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Ej: +51 999 999 999"
                        className="p-3 rounded-md border border-gray-300"
                        defaultValue={user?.phone || ""}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-semibold">
                        DNI / Documento
                    </label>
                    <input
                        type="text"
                        name="document"
                        placeholder="Ingresa tu DNI o documento"
                        className="p-3 rounded-md border border-gray-300"
                        defaultValue={user?.document || ""}
                    />
                </div>

                {/* Botón */}
                <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-black text-white font-bold rounded-md hover:bg-gray-800"
                >
                    Continuar
                </button>
            </form>
        </div>
    );
}
