"use server";

import getToken from "@/src/auth/token";
import { changePasswordSchema } from "@/src/types";

type ChangePasswordResult = {
    errors: string[];
    success: string;
};

export async function changePassword(
    prevState: ChangePasswordResult,
    formData: FormData
): Promise<ChangePasswordResult> {
    try {
        const values = {
            currentPassword: formData.get("currentPassword")?.toString(),
            newPassword: formData.get("newPassword")?.toString(),
            confirmNewPassword: formData.get("confirmNewPassword")?.toString(),
        };

        const parsed = changePasswordSchema.safeParse(values);
        if (!parsed.success) {
            return { errors: parsed.error.issues.map((e) => e.message), success: "" };
        }

        const token = await getToken();
        if (!token) return { errors: ["Usuario no autenticado"], success: "" };

        const res = await fetch(`${process.env.API_URL}/users/change-password`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parsed.data),
            cache: "no-store",
        });

        const data = await res.json();
        if (!res.ok) {
            return { errors: [data?.message || "Error cambiando la contraseña"], success: "" };
        }

        return { errors: [], success: "Contraseña actualizada correctamente" };
    } catch {
        return { errors: ["Ocurrió un error inesperado"], success: "" };
    }
}
