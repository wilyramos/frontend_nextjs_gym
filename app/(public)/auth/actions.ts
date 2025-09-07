"use server";


import { registerSchema, loginSchema } from "@/src/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


type ActionStateTypeCheck = {
    errors: string[];
    success: string;
    exists?: boolean;
};

type ActionStateType = {
    errors: string[];
    success: string;
};

export async function checkEmailAction(
    prevState: ActionStateTypeCheck,
    formData: FormData
) {
    try {
        const email = formData.get("email")?.toString();

        if (!email) {
            return {
                errors: ["El email es obligatorio"],
                success: "",
            };
        }

        const res = await fetch(`${process.env.API_URL}/auth/check-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (!res.ok) {
            return {
                errors: [data.message || "Error verificando email"],
                success: "",
            };
        }

        return {
            errors: [],
            success: data.exists ? "Email encontrado" : "Email no encontrado",
            exists: data.exists,
        };
    } catch (error) {
        return {
            errors: [error || "Error inesperado"],
            success: "",
        };
    }
}


export async function registerAction(prevState: ActionStateType, formData: FormData): Promise<ActionStateType> {
    // Obtener datos del form

    const dataRegister = {
        email: formData.get("email")?.toString() || "",
        name: formData.get("name")?.toString() || "",
        password: formData.get("password")?.toString() || "",
    }

    // Validar con Zod
    const parseResult = registerSchema.safeParse(dataRegister);

    if (!parseResult.success) {
        const errors = parseResult.error.issues.map(e => e.message)
        return { errors, success: "" };
    }

    // Enviar al backend
    const url = `${process.env.API_URL}/auth/register`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: parseResult.data.email,
            name: parseResult.data.name,
            password: parseResult.data.password
        }),
    });

    const data = await res.json();

    if (!res.ok) {
        return {
            errors: [data.message || "Error registrando usuario"],
            success: "",
        };
    }

    console.log("Token guardado en cookies", data);
    // Save the token
    if (data.access_token) {
        (await cookies()).set({
            name: "access_token_gym",
            value: data.access_token,
            path: "/",
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "lax",
        });
    }

    redirect("/profile");
}

export async function authenticaAction(prevState: ActionStateType, formData: FormData) {

    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();


    const redirectTo = formData.get("redirectTo")?.toString() || "/profile";
    const parseResult = loginSchema.safeParse({ email, password });

    if (!parseResult.success) {
        const errors = parseResult.error.issues.map(e => e.message);
        return { errors, success: "" };
    }

    const url = `${process.env.API_URL}/auth/login`;

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
        return {
            errors: [data.message || "Error autenticando usuario"],
            success: "",
        };
    }

    console.log("Token guardado en cookies", data.role);
    // Save the token
    if (data.access_token) {
        (await cookies()).set({
            name: "access_token_gym",
            value: data.access_token,
            path: "/",
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 7 days
            sameSite: "lax",
        });
    }


    const { role } = data.user;
    console.log("roleee", role)
    if (role === 'ADMIN') redirect("/admin/dashboard");
    if (role === 'CLIENT') redirect("/overview");

    // console.log("Token guardado en cookies", data);

    redirect(redirectTo);
}

export async function logoutAction() {
    (await cookies()).delete("access_token_gym");
    redirect("/auth/login");
}