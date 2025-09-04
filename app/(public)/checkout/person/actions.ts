"use server";


import getToken from "@/src/auth/token";
import { registerSchema, loginSchema, UserUpdateSchema } from "@/src/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



type ActionStateType = {
    errors: string[];
    success: string;
};

export async function EditUserAction(
    prevState: ActionStateType,
    formData: FormData
) {
    try {

        console.log("FormData", formData);
        const userData = {
            name: formData.get("name")?.toString(),
            email: formData.get("email")?.toString(),
            phone: formData.get("phone")?.toString(),
            document: formData.get("document")?.toString(),
        }

        console.log("Dddss user", userData)

        const parsedData = UserUpdateSchema.safeParse(userData);

        if (!parsedData.success) {
            return {
                errors: parsedData.error.issues.map(err => err.message),
                success: "",
            };
        }

        const token = await getToken();

        const url = `${process.env.API_URL}/users/me`;
        const res = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(parsedData.data)
        });

        const json = await res.json();

        if (!res.ok) {
            return {
                errors: [json.message || "Failed to update user"],
                success: "",
            };
        }

        revalidatePath("/checkout/person")

        return {
            errors: [],
            success: "User updated successfully",
        };
    } catch (error) {
        console.error("Error updating user:", error);
        return {
            errors: ["Failed to update user"],
            success: "",
        };
    }
}