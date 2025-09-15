"use client";

import { useState, Fragment, useEffect } from "react";
import { useActionState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "sonner";

import { verifyPassword } from "@/app/(client)/profile/actions";
import { cancelSubscription } from "@/app/(client)/cancelsubscription/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CancelButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [passwordVerified, setPasswordVerified] = useState(false);

    // Estado para manejar la acción de verificación
    const [state, dispatch, isPending] = useActionState(verifyPassword, {
        errors: [],
        success: ""
    });

    // Cuando cambia el estado de la verificación, mostrar mensajes
    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach((err) => toast.error(err));
        }
        if (state.success) {
            toast.success(state.success);
            setPasswordVerified(true);
        }
    }, [state]);

    // Función para cancelar la suscripción
    const handleCancelSubscription = async () => {
        try {
            await cancelSubscription();
            toast.success("Suscripción cancelada correctamente");
            setIsOpen(false);
            setPasswordVerified(false);
        } catch (error) {
            console.error("Error cancelling subscription:", error);
            toast.error("Ocurrió un error al cancelar la suscripción");
        }
    };

    return (
        <>
            <Button variant="destructive" onClick={() => setIsOpen(true)}>
                Cancelar suscripción
            </Button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                    <div className="fixed inset-0 bg-black/10" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                            <Dialog.Title className="text-lg font-semibold mb-4">
                                {passwordVerified
                                    ? "Confirmar cancelación"
                                    : "Verificar contraseña"}
                            </Dialog.Title>

                            {passwordVerified ? (
                                <div className="flex justify-end gap-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        onClick={handleCancelSubscription}
                                    >
                                        Confirmar cancelación
                                    </Button>
                                </div>
                            ) : (
                                <form action={dispatch} className="space-y-4">
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña"
                                        required
                                    />

                                    <div className="flex justify-end gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Cancelar
                                        </Button>

                                        <Button type="submit" variant="destructive" disabled={isPending}>
                                            {isPending ? "Verificando..." : "Verificar"}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
