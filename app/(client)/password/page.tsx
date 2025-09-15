"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import { changePassword } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import BackButton from "@/src/components/common/BackButton";

type ChangePasswordState = {
    errors: string[];
    success: string;
};

export default function PasswordPage() {
    const [state, formAction] = useActionState<ChangePasswordState, FormData>(
        changePassword,
        { errors: [], success: "" }
    );

    useEffect(() => {
        if (state.success) toast.success(state.success);
        if (state.errors.length > 0) {
            state.errors.forEach((err) => toast.error(err));
        }
    }, [state]);

    return (
        <div className="mx-auto space-y-6">
            <BackButton />
            <h2 className="text-xl font-semibold">Cambiar contraseña</h2>

            <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="currentPassword">Contraseña actual</Label>
                    <Input
                        type="password"
                        id="currentPassword"
                        name="currentPassword"  
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="newPassword">Nueva contraseña</Label>
                    <Input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmNewPassword">Confirmar nueva contraseña</Label>
                    <Input
                        type="password"
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                    />
                </div>

                <Button type="submit" className="w-full">
                    Actualizar contraseña
                </Button>
            </form>
        </div>
    );
}
