// File: app/(admin)/admin/billing/page.tsx
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/src/components/tables/Table";

type Invoice = {
    id: number;
    miembro: string;
    monto: string;
    fecha: string;
    estado: "Pagado" | "Pendiente" | "Vencido";
};

const invoices: Invoice[] = [
    { id: 1, miembro: "Juan Pérez", monto: "$50", fecha: "2025-09-01", estado: "Pagado" },
    { id: 2, miembro: "Ana Torres", monto: "$130", fecha: "2025-09-10", estado: "Pendiente" },
    { id: 3, miembro: "Luis Ramírez", monto: "$50", fecha: "2025-08-20", estado: "Vencido" },
];

export default function BillingPage() {
    return (
        <AdminPageWrapper
            title="Facturación"
            actionButton={<Button>Registrar Pago</Button>}
            tabs={[
                { label: "Todas", href: "/admin/billing" },
                { label: "Pagadas", href: "/admin/billing/paid" },
                { label: "Pendientes", href: "/admin/billing/pending" },
                { label: "Vencidas", href: "/admin/billing/overdue" },
            ]}
        >
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Miembro</TableHead>
                            <TableHead>Monto</TableHead>
                            <TableHead>Fecha</TableHead>
                            <TableHead>Estado</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell>{invoice.id}</TableCell>
                                <TableCell>{invoice.miembro}</TableCell>
                                <TableCell>{invoice.monto}</TableCell>
                                <TableCell>{invoice.fecha}</TableCell>
                                <TableCell
                                    className={
                                        invoice.estado === "Pagado"
                                            ? "text-green-600"
                                            : invoice.estado === "Pendiente"
                                                ? "text-yellow-600"
                                                : "text-red-600"
                                    }
                                >
                                    {invoice.estado}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AdminPageWrapper>
    );
}
