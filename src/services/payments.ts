import "server-only";
import getToken from "../auth/token";
import { paymentsArraySchema } from "@/src/types";

export async function getPaymentsData() {

    try {

        const token = await getToken();
        const url = `${process.env.API_URL}/payments/me/history`;
        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            return [];
        }
        const data = await res.json();
        return paymentsArraySchema.parse(data);

    } catch (error) {

        console.error("Error fetching payment data:", error);
        return [];
    }
}
