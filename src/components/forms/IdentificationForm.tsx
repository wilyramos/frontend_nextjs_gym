"use client";

import { EditUserAction } from "@/app/(public)/checkout/person/actions";
import type { TUser } from "@/src/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <form action={dispatch} className="space-y-5">
            {/* Nombre */}
            <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Ingresa tu nombre"
                    defaultValue={user?.name || ""}
                />
            </div>

            {/* Correo */}
            <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ej: correo@ejemplo.com"
                    defaultValue={user?.email || ""}
                    readOnly
                    className="bg-gray-100"
                />
            </div>

            {/* Teléfono */}
            <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Ej: +51 999 999 999"
                    defaultValue={user?.phone || ""}
                />
            </div>

            {/* Documento */}
            <div className="space-y-2">
                <Label htmlFor="document">DNI / Documento</Label>
                <Input
                    id="document"
                    name="document"
                    placeholder="Ingresa tu DNI o documento"
                    defaultValue={user?.document || ""}
                />
            </div>

            {/* Botón */}
            <Button type="submit" className="w-full mt-4">
                Continuar
            </Button>
        </form>
    );
}
