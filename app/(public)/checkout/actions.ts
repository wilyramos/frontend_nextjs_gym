"use server";

import getToken from "@/src/auth/token";

export async function createSubscriptionAction(subscriptionId: number) {
    try {

        // TODO: Obtener email del usuario autenticado si es necesario
        const token = await getToken();

        const url = `${process.env.API_URL}/payments/${subscriptionId}/activate`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        });

        console.log("Respuesta de fetch en createSubscriptionAction:", res);
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Error creando suscripción");
        }
        console.log("Respuesta de createSubscriptionAction:", res);

        return await res.json();
    } catch (error) {
        console.error("❌ Error en createSubscriptionAction:", error);
        throw error;
    }
}
