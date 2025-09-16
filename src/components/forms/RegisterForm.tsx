"use client";

import { useEffect, useState } from "react";
import { useActionState } from "react";
import { toast } from "sonner";
import { registerAction } from "@/app/(public)/auth/actions";
import Spinner from "../common/Spinner";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") ?? "";

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [state, dispatch, isPending] = useActionState(registerAction, {
        errors: [],
        success: "",
    });

    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach((err) => toast.error(err));
        }
        if (state.success) toast.success(state.success);
    }, [state]);

    return (
        <form action={dispatch} className="space-y-6 max-w-md mx-auto">
            {/* Correo electrónico */}
            <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            {/* Nombre */}
            <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            {/* Contraseña */}
            <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            {/* Redirección oculta */}
            <input type="hidden" name="redirectTo" value={redirectTo} />

            {/* Botón de registro */}
            <Button
                type="submit"
                disabled={isPending}
                className="w-full flex justify-center"
            >
                {isPending ? <Spinner /> : "Registrarme"}
            </Button>

            {/* Link a login */}
            <div className="text-sm text-muted-foreground text-center">
                <Link
                    href={`/auth/login${redirectTo ? `?redirectTo=${redirectTo}` : ""}`}
                    className="hover:underline"
                >
                    ¿Ya tienes una cuenta? Inicia sesión
                </Link>
            </div>
        </form>
    );
}
