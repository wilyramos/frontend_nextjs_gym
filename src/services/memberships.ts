import "server-only";

import getToken from "../auth/token";
import { MembershipArraySchema } from "@/src/types";


export async function getMembershipData() {

    try {
        const token = await getToken();
        const url = `${process.env.API_URL}/memberships/me`;
        console.log("la url ", url)
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        });
        if (!response.ok) {
            return [];
        }
        const data = await response.json();
        console.log("Fetched membership data:", data);
        return MembershipArraySchema.parse(data);
    } catch (error) {
        console.error("Error fetching membership data:", error);
        return [];
    }
}