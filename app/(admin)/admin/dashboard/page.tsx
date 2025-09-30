// File: frontend/app/(admin)/admin/dashboard/page.tsx
import { getDashboardMetrics } from "@/src/services/reports";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
    const data = await getDashboardMetrics();

    return (
        <AdminPageWrapper
            title="Dashboard"
            tabs={[
                { label: "General", href: "/admin/dashboard" },
                { label: "Reportes", href: "/admin/dashboard/reports" },
                { label: "Configuración", href: "/admin/dashboard/settings" },
            ]}
        >
            {/* Métricas principales */}
            <section>
                <h2 className="text-lg font-semibold mb-4">Panel de Administración</h2>
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 rounded-md border shadow-xs text-center">
                        <p className="text-xs">Usuarios Activos</p>
                        <p className="text-2xl font-bold">{data.activeUsers}</p>
                    </div>
                    <div className="p-4 rounded-md border shadow-xs text-center">
                        <p className="text-xs">Membresías por expirar (7 días)</p>
                        <p className="text-2xl font-bold">{data.expiringMemberships}</p>
                    </div>
                    <div className="p-4 rounded-md border shadow-xs text-center">
                        <p className="text-xs">Total de Ingresos</p>
                        <p className="text-2xl font-bold">{data.totalIncome}</p>
                    </div>
                </div>
            </section>

            {/* Actividades recientes */}
            <section className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Resumen de Actividades Recientes</h2>
                <div className="p-4 rounded-md border shadow-sm">
                    {/* Aquí puedes agregar la lista de actividades */}
                </div>
            </section>
        </AdminPageWrapper>
    );
}
