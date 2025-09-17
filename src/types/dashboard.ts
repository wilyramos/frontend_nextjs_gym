import { z } from "zod";

export const DashboardSchema = z.object({
    activeUsers: z.number().int().nonnegative(),
    expiringMemberships: z.number().int().nonnegative(),
    totalIncome: z.number().min(0),
});

export type TDashboard = z.infer<typeof DashboardSchema>;