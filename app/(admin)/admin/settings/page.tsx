// File: app/(admin)/admin/settings/page.tsx
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
    return (
        <AdminPageWrapper
            title="Configuración"
            tabs={[
                { label: "General", href: "/admin/settings" },
                { label: "Planes", href: "/admin/settings/plans" },
                { label: "Pagos", href: "/admin/settings/payments" },
                { label: "Notificaciones", href: "/admin/settings/notifications" },
            ]}
        >
            <Card>
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Configuraciones Generales</h3>
                    <p className="text-gray-600">
                        Aquí puedes personalizar el nombre del gimnasio, logo y datos de
                        contacto.
                    </p>
                </CardContent>
            </Card>
        </AdminPageWrapper>
    );
}
