"use client";

import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/src/components/tables/Table";
import { TPaginatedUsersWithMemberships } from "@/src/types";
import { formatDateOnly } from "@/lib/helpers";

export default function GymMembersTable({
    data,
}: {
    data?: TPaginatedUsersWithMemberships;
}) {
    if (!data || data.data.length === 0) {
        return <p>No hay socios registrados.</p>;
    }

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-16">ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Teléfono</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Inicio</TableHead>
                        <TableHead>Fin</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.data.map((member) => {
                        const m = member.memberships?.[0]; // última membresía
                        return (
                            <TableRow key={member.id} className="hover:bg-gray-50">
                                <TableCell className="font-medium">{member.id}</TableCell>
                                <TableCell className="font-medium">{member.name}</TableCell>
                                <TableCell>{member.email}</TableCell>
                                <TableCell>
                                    {member.phone && member.phone.trim() !== "" ? member.phone : "—"}
                                </TableCell>

                                {/* Estado de la membresía */}
                                <TableCell>
                                    {m ? (
                                        <span
                                            className={
                                                m.status === "ACTIVE"
                                                    ? "text-green-600 font-semibold"
                                                    : "text-red-600 font-semibold"
                                            }
                                        >
                                            {m.status}
                                        </span>
                                    ) : (
                                        <span className="text-gray-400">Sin membresía</span>
                                    )}
                                </TableCell>

                                {/* Fechas */}
                                <TableCell>
                                    {m && m.validFrom ? formatDateOnly(m.validFrom) : "—"}
                                </TableCell>
                                <TableCell>
                                    {m && m.validTo ? formatDateOnly(m.validTo) : "—"}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}