"use server";

import getToken from "@/src/auth/token";

type PrevStateProps = {
    errors: string[];
    success: string;
}

export async function verifyPassword(prevState: PrevStateProps, formData: FormData) {
    try {
        const password = formData.get("password") as string;
        const token = await getToken();
        const url = `${process.env.API_URL}/users/verify-password`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password }),
            cache: "no-store",
        });
        if (!response.ok) {
            const data = await response.json();
            return {
                errors: [data.message || "Error verifying password"],
                success: "",
            }
        }
        return {
            errors: [],
            success: "Contraseña verificada correctamente",
        }
    } catch (error) {
        console.error("Error verifying password:", error);
        return { errors: ["Ocurrió un error inesperado"], success: "" };
    }
}
