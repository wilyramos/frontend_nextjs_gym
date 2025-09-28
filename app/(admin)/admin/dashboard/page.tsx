// File: frontend/app/(admin)/admin/dashboard/page.tsx
import { getDashboardMetrics } from "@/src/services/reports";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";

export const dynamic = "force-dynamic";


interface MetricCardProps {
    title: string;
    value: number | string;
}


function MetricCard({ title, value }: MetricCardProps) {
    return (
        <div className="rounded-xl border-l-4  p-4 text-center shadow-sm">
            <h2 className="mb-1 text-sm font-medium">{title}</h2>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="space-y-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            {children}
        </section>
    );
}

export default async function DashboardPage() {
    const data = await getDashboardMetrics();

    return (
        <AdminPageWrapper title="Dashboard">
            {/* Métricas principales */}
            <Section title="Panel de Administración">
                <div className="grid gap-6 md:grid-cols-3">
                    <MetricCard title="Usuarios Activos" value={data.activeUsers} />
                    <MetricCard
                        title="Membresías a Punto de Expirar (7 días)"
                        value={data.expiringMemberships}
                    />
                    <MetricCard title="Total de Ingresos" value={data.totalIncome} />
                </div>
            </Section>

            {/* Actividades recientes */}
            <Section title="Resumen de Actividades Recientes">
                <div className="rounded-lg p-6 shadow-sm">
                    
                </div>
            </Section>
        </AdminPageWrapper>
    );
}