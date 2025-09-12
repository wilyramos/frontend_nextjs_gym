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
        console.log("la url ", url)
        console.log("el res ", res)
        const data = await res.json();
        console.log("Fetched payment data:", data);
        return paymentsArraySchema.parse(data);

    } catch (error) {

        console.error("Error fetching payment data:", error);
        return [];
    }
}
