"use client";

import { useState, useEffect, useTransition } from "react";
import { toast } from "sonner";
import { useActionState } from "react";
import { authenticaAction } from "@/app/(public)/auth/actions";
import Spinner from "../common/Spinner";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo")?.toString();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPendingTransition] = useTransition();

    const [state, dispatch, isPending] = useActionState(authenticaAction, {
        errors: [],
        success: "",
    });

    // Mostrar errores
    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach((err) => toast.error(err));
        }
    }, [state]);

    return (
        <div className="space-y-6">
            {/* Separador opcional Google */}
            <div className="relative text-center text-sm text-muted-foreground my-6">
                <hr className="border-border mb-2" />
                <span className="bg-background px-2 absolute -top-3 left-1/2 -translate-x-1/2 font-semibold">
                    o
                </span>
            </div>

            <form action={dispatch} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">Correo</Label>
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

                <input type="hidden" name="redirectTo" value={redirectTo ?? ""} />

                {/* Botón de enviar */}
                <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex justify-center"
                >
                    {isPending || isPendingTransition ? <Spinner /> : "Ingresar"}
                </Button>

                {/* Links secundarios */}
                <div className="flex justify-between text-sm text-muted-foreground">
                    <Link
                        href="/auth/forgot-password"
                        className="hover:underline"
                    >
                        Olvidé mi contraseña
                    </Link>

                    <Link
                        href={`/auth/register${redirectTo ? `?redirectTo=${redirectTo}` : ""}`}
                        className="hover:underline"
                    >
                        Crear una cuenta
                    </Link>
                </div>
            </form>
        </div>
    );
}
