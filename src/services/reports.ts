import "server-only";

import getToken from "../auth/token";
import { DashboardSchema } from "@/src/types/dashboard";

export async function getDashboardMetrics() {

    try {
        const token = await getToken();
        const res = await fetch(`${process.env.API_URL}/reports/dashboard`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch dashboard metrics");
        }

        const data = await res.json();
        const parsed = DashboardSchema.safeParse(data);

        if (!parsed.success) {
            console.error("Invalid dashboard metrics format:", parsed.error.format());
            throw new Error("Invalid dashboard metrics format");
        }

        return parsed.data;
    } catch (error) {
        console.error("Error fetching dashboard metrics:", error);
        throw new Error("Error fetching dashboard metrics");
    }
}