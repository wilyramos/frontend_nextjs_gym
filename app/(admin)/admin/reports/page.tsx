// File: app/(admin)/admin/reports/page.tsx
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import { Card, CardContent } from "@/components/ui/card";

export default function ReportsPage() {
    return (
        <AdminPageWrapper
            title="Reportes"
            tabs={[
                { label: "General", href: "/admin/reports" },
                { label: "Ingresos", href: "/admin/reports/revenue" },
                { label: "Asistencia", href: "/admin/reports/attendance" },
                { label: "Clientes", href: "/admin/reports/members" },
            ]}
        >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold">Ingresos Totales</h3>
                        <p className="mt-2 text-2xl font-bold text-green-600">$12,450</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold">Miembros Activos</h3>
                        <p className="mt-2 text-2xl font-bold text-blue-600">128</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold">Clases Dictadas</h3>
                        <p className="mt-2 text-2xl font-bold text-purple-600">45</p>
                    </CardContent>
                </Card>
            </div>
        </AdminPageWrapper>
    );
}
