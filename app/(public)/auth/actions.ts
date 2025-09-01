"use server";

export async function checkEmailAction(formData: FormData) {
    try {
        const email = formData.get("email")?.toString();

        const res = await fetch(`${process.env.API_URL}/api/users/check-email?email=${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) throw new Error("Error verificando email");

        const data = await res.json();
        return data.exists;
    } catch (error) {
        console.error(error);
        return false;
    }
}