"use client";

import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditUserAction } from "@/app/(public)/checkout/person/actions";
import { useActionState } from "react";
import { toast } from "sonner";
import type { TUser } from "@/src/types";

export default function EditProfileDialog({ user }: { user: TUser }) {
    const [isOpen, setIsOpen] = useState(false);

    const [state, dispatch] = useActionState(EditUserAction, {
        errors: [],
        success: "",
    });

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
            setIsOpen(false);
        }
        if (state.errors.length > 0) {
            state.errors.forEach((err) => toast.error(err));
        }
    }, [state]);

    return (
        <>
            <div
                className="mb-4 text-sm text-primary cursor-pointer hover:underline"
                onClick={() => setIsOpen(true)}
            >
                Editar
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50"
                    onClose={() => setIsOpen(false)}
                >
                    {/* Fondo oscuro */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30" />
                    </Transition.Child>

                    {/* Contenido */}
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md rounded-xl bg-background p-6 shadow-lg border border-border">
                                <Dialog.Title className="text-lg font-semibold text-foreground">
                                    Editar perfil
                                </Dialog.Title>

                                <form action={dispatch} className="mt-4 space-y-4">
                                    <div>
                                        <Label htmlFor="name">Nombre</Label>
                                        <Input id="name" name="name" defaultValue={user.name} />
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            defaultValue={user.email}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone">Teléfono</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            defaultValue={user.phone || ""}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="document">DNI</Label>
                                        <Input
                                            id="document"
                                            name="document"
                                            defaultValue={user.document || ""}
                                        />
                                    </div>

                                    <div className="mt-6 flex justify-end gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Cancelar
                                        </Button>
                                        <Button type="submit">Guardar</Button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
