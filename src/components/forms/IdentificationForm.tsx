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
    const plan = searchParams.get("plan");

    const [state, dispatch] = useActionState(EditUserAction, {
        errors: [],
        success: "",
    });

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
            router.push(`/checkout/payment?plan=${plan}`);
        }
    }, [state, router, plan]);

    return (
        <div>
            <form action={dispatch} className="flex flex-col gap-4">
                {/* Nombre */}
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-bold text-xs">
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
                    <label className="mb-2 text-black font-bold text-xs">
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
                    <label className="mb-2 text-black font-bold text-xs">Teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Ej: +51 999 999 999"
                        className="p-3 rounded-md border border-gray-300"
                        defaultValue={user?.phone || ""}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-bold text-xs">
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
                    className="w-full py-2 mt-4 bg-black text-white font-bold rounded-md hover:bg-white hover:text-black border border-black cursor-pointer transition-colors duration-200 "
                >
                    Continuar
                </button>
            </form>
        </div>
    );
}
