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
import Link from "next/link";

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
            <Table className="text-sm">
                <TableHeader>
                    <TableRow>
                        <TableHead>Miembro</TableHead>
                        <TableHead>Email/Correo</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.data.map((member) => {
                        const m = member.memberships?.[0]; // última membresía
                        const href = `/admin/members/${member.id}`;

                        return (
                            <TableRow
                                key={member.id}
                                className="hover:bg-gray-50 cursor-pointer"
                            >
                                {/* Nombre + Estado */}
                                <TableCell className="font-medium">
                                    <Link href={href} className="block w-full h-full">
                                        <div className="flex flex-col">
                                            <span>{member.name}</span>
                                            <span
                                                className={`text-xs ${m?.status === "ACTIVE"
                                                        ? "text-green-600 font-semibold"
                                                        : "text-red-300 font-semibold"
                                                    }`}
                                            >
                                                {m ? m.status : "Sin membresía"}
                                            </span>
                                        </div>
                                    </Link>
                                </TableCell>

                                {/* Email */}
                                <TableCell>
                                    <Link href={href} className="block w-full h-full">
                                        <div className="flex flex-col">
                                            <span>{member.email}</span>
                                            <span className="text-xs text-gray-400 italic">
                                                {member.document}
                                            </span>
                                        </div>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
