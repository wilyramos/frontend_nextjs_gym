
//File: frontend/app/(admin)/admin/dashboard/page.tsx

import { getDashboardMetrics } from "@/src/services/reports";
import getToken from "@/src/auth/token";




export default async function DashboardPage() {

    const data = await getDashboardMetrics();

    console.log(data);


    return (
        <section className="p-8">

            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-2"> Active Members</h2>
                    <p className="text-3xl">{data.activeUsers}</p>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-2">Expiring Memberships</h2>
                    <p className="text-3xl">{data.expiringMemberships}</p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-2">Total Income</h2>
                    <p className="text-3xl">{data.totalIncome}</p>
                </div>
            </div>
        </section>
    );
}