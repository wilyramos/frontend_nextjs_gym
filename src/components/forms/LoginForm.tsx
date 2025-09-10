"use client";

import { useState, useEffect, useTransition } from "react";
import { toast } from "sonner";
import { useActionState } from "react";
import { authenticaAction } from "@/app/(public)/auth/actions";
import Spinner from "../common/Spinner";
import Link from "next/link";
import { useSearchParams } from "next/navigation";



export default function LoginForm() {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo")?.toString();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isPendingTransition, startTransition] = useTransition();


    const [state, dispatch, isPending] = useActionState(authenticaAction, {
        errors: [],
        success: "",
    });

    // Mostrar errores o ejecutar callback onSuccess
    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach((err) => toast.error(err));
        }
    }, [state]);

    // const handleGoogleLoginSuccess = ({ credential }: CredentialResponse) => {
    //     if (!credential) return toast.error("Token de Google no recibido");

    //     startTransition(async () => {
    //         // const result = await googleLoginAction({ credential, redirectTo });
    //         // if (result?.error) toast.error(result.error);
    //     });
    // };

    return (

        <div>
            <div className="flex justify-center">

                {/* <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={() => toast.error("Error al iniciar sesión con Google")}
                    size="large"
                    shape="circle"
                /> */}

            </div>

            <div className="relative text-center text-sm text-black my-6">
                <hr className="border-gray-300 mb-2" />
                <span className="bg-gray-50 px-2 absolute -top-3 left-1/2 -translate-x-1/2 font-bold">
                    o
                </span>
            </div>

            <form action={dispatch} className="space-y-6">
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Correo</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tucorreo@ejemplo.com"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />
                </div>

                {/* Contraseña */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        required
                    />
                </div>

                <div>
                    <input type="hidden" name="redirectTo" value={redirectTo} />
                </div>

                {/* Botones */}
                <div className="flex justify-between items-center">


                    <button
                        type="submit"
                        disabled={isPending}
                        className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 flex items-center justify-center h-10 w-30"
                    >
                        {isPending || isPendingTransition ? <Spinner /> : "Ingresar"}
                    </button>
                </div>

                <div className="flex justify-between">
                    <Link
                        href="/auth/forgot-password"
                        className="text-sm text-gray-600 hover:underline"
                    >
                        Olvidé mi contraseña
                    </Link>

                    <Link
                        href={
                            `/auth/register${redirectTo ? `?redirectTo=${redirectTo}` : ""}`
                        }
                        className="text-sm text-gray-600 hover:underline"
                    >
                        Crear una cuenta
                    </Link>
                </div>
            </form>

        </div>
    );
}
