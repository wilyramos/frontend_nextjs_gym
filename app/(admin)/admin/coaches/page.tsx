"use client";

import React from "react";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/src/components/tables/Table";

type Coach = {
    id: number;
    nombre: string;
    especialidad: string;
    clientes: number;
    horarios: string[];
};

const coaches: Coach[] = [
    {
        id: 1,
        nombre: "Ana Torres",
        especialidad: "Yoga",
        clientes: 8,
        horarios: ["Lun 8-10am", "Mié 6-8pm", "Vie 7-9am"],
    },
    {
        id: 2,
        nombre: "Luis Ramírez",
        especialidad: "Crossfit",
        clientes: 12,
        horarios: ["Mar 7-9am", "Jue 6-8pm"],
    },
    {
        id: 3,
        nombre: "Carla Gómez",
        especialidad: "Spinning",
        clientes: 5,
        horarios: ["Lun 6-7pm", "Mié 6-7pm", "Vie 6-7pm"],
    },
];

export default function CoachesPage() {
    return (
        <AdminPageWrapper title="Entrenadores">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-16">ID</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Especialidad</TableHead>
                            <TableHead>Número de Clientes</TableHead>
                            <TableHead>Horarios</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {coaches.map((coach) => (
                            <TableRow key={coach.id}>
                                <TableCell className="text-gray-700">{coach.id}</TableCell>
                                <TableCell className="text-gray-700">{coach.nombre}</TableCell>
                                <TableCell className="text-gray-700">{coach.especialidad}</TableCell>
                                <TableCell className="text-gray-700">{coach.clientes}</TableCell>
                                <TableCell className="text-gray-700">
                                    <ul>
                                        {coach.horarios.map((horario, index) => (
                                            <li key={index}>{horario}</li>
                                        ))}
                                    </ul>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AdminPageWrapper>
    );
}
