"use server";

export async function createSubscriptionAction(subscriptionId: number) {
    try {


        const url = `${process.env.API_URL}/payments/${subscriptionId}/subscription`;
        console.log("la url y idd", url, subscriptionId);
        const res = await fetch(
            url,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    planName: "Plan Premium",
                    frequency: 1, // cada mes
                    amount: 50.0,
                }),
                cache: "no-store",
            }
        );

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
