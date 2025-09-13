"use server"

import getToken from "@/src/auth/token";

export async function cancelSubscription() {
    try {
        const token = await getToken();
        const url = `${process.env.API_URL}/subscriptions/cancel/me`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });
        if (!response.ok) {
            throw new Error("Failed to cancel subscription");
        }
        return await response.json();
    } catch (error) {
        console.error("Error cancelling subscription:", error);
        throw error;
    }
}