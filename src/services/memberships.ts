import "server-only";

import getToken from "../auth/token";
import { MembershipArraySchema } from "@/src/types";

export async function getMembershipData() {

    try {
        const token = await getToken();
        const url = `${process.env.API_URL}/memberships/me`;
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
        return MembershipArraySchema.parse(data);
    } catch (error) {
        console.error("Error fetching membership data:", error);
        return [];
    }
}