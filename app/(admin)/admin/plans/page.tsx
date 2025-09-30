// File: app/(admin)/admin/plans/page.tsx
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

type Plan = {
    id: number;
    nombre: string;
    duracion: string;
    precio: string;
    estado: "Activo" | "Inactivo";
};

const plans: Plan[] = [
    { id: 1, nombre: "Mensual", duracion: "30 días", precio: "$50", estado: "Activo" },
    { id: 2, nombre: "Trimestral", duracion: "90 días", precio: "$130", estado: "Activo" },
    { id: 3, nombre: "Anual", duracion: "365 días", precio: "$450", estado: "Inactivo" },
];

export default function PlansPage() {
    return (
        <AdminPageWrapper
            title="Planes"
            actionButton={<Button>Agregar Plan</Button>}
        >
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Duración</TableHead>
                            <TableHead>Precio</TableHead>
                            <TableHead>Estado</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {plans.map((plan) => (
                            <TableRow key={plan.id}>
                                <TableCell>{plan.id}</TableCell>
                                <TableCell>{plan.nombre}</TableCell>
                                <TableCell>{plan.duracion}</TableCell>
                                <TableCell>{plan.precio}</TableCell>
                                <TableCell
                                    className={plan.estado === "Activo" ? "text-green-600" : "text-red-600"}
                                >
                                    {plan.estado}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AdminPageWrapper>
    );
}