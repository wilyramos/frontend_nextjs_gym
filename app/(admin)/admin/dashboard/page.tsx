// File: frontend/app/(admin)/admin/dashboard/page.tsx
import { getDashboardMetrics } from "@/src/services/reports";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/src/components/tables/Table";
export const dynamic = 'force-dynamic';


interface MetricCardProps {
    title: string;
    value: number | string;
}

const activities = [
    { id: 1, description: "Usuario Juan Pérez se registró", date: "2024-10-01", user: "Juan Pérez" },
    { id: 2, description: "Membresía de Ana Gómez expira pronto", date: "2024-10-02", user: "Ana Gómez" },
    { id: 3, description: "Pago recibido de Carlos López", date: "2024-10-03", user: "Carlos López" },
];

function MetricCard({ title, value }: MetricCardProps) {
    return (
        <div className="rounded-xl border-l-4 border-blue-500 bg-white p-4 text-center shadow">
            <h2 className="mb-1 text-gray-700 font-semibold">{title}</h2>
            <p className="text-2xl font-bold text-blue-600">{value}</p>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="p-8 space-y-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            {children}
        </section>
    );
}

export default async function DashboardPage() {
    const data = await getDashboardMetrics();

    return (
        <>
            <Section title="Panel de Administración">
                <div className="grid gap-6 md:grid-cols-3">
                    <MetricCard title="Usuarios Activos" value={data.activeUsers} />
                    <MetricCard title="Membresías a Punto de Expirar (7 días)" value={data.expiringMemberships} />
                    <MetricCard title="Total de Ingresos" value={data.totalIncome} />
                </div>
            </Section>

            <Section title="Resumen de Actividades Recientes">
                <div className="rounded-lg bg-white p-6 shadow">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Descripción</TableHead>
                                <TableHead>Fecha</TableHead>
                                <TableHead>Usuario</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {activities.map(a => (
                                <TableRow key={a.id}>
                                    <TableCell>{a.description}</TableCell>
                                    <TableCell>{a.date}</TableCell>
                                    <TableCell>{a.user}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Section>

            <Section title="Enlaces Rápidos">
                <ul className="list-disc pl-5 space-y-1">
                    {[
                        { href: "/admin/users", label: "Gestión de Usuarios" },
                        { href: "/admin/memberships", label: "Gestión de Membresías" },
                        { href: "/admin/reports", label: "Informes" },
                    ].map(link => (
                        <li key={link.href}>
                            <a href={link.href} className="text-blue-600 hover:underline">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </Section>
        </>
    );
}
