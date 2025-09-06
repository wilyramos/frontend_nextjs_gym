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

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Error creando suscripción");
        }

        return await res.json();
    } catch (error: any) {
        console.error("❌ Error en createSubscriptionAction:", error);
        throw error;
    }
}
