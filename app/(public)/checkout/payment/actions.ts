"use server";

import getToken from "@/src/auth/token";
import { SubscriptionSchema } from "@/src/types";

// Inferir el tipo desde Zod

type CreateSubscriptionParams = {
    plan: string;
};

export async function createSubscription(
    params: CreateSubscriptionParams
) {
    try {
        const token = await getToken();
        const url = `${process.env.API_URL}/subscriptions`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(params),
        });

        if (!res.ok) {
            console.error("API error:", await res.text());
            return null;
        }

        const json = await res.json();

        // ✅ Validar con Zod que cumple el esquema
        const parsed = SubscriptionSchema.safeParse(json);

        if (!parsed.success) {
            console.error("Validation error:", parsed.error.format());
            return null;
        }

        return parsed.data; // Subscription validada
    } catch (error) {
        console.error("Error creating subscription:", error);
        return null;
    }
}
