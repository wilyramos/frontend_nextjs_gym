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
import { Button } from "@/components/ui/button";

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
        <AdminPageWrapper
            title="Entrenadores"
            actionButton={<Button>Agregar Entrenador</Button>}
            tabs={[
                { label: "Listado", href: "/admin/coaches" },
                { label: "Especialidades", href: "/admin/coaches/specialties" },
            ]}
        >
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-16">ID</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Especialidad</TableHead>
                            <TableHead>Clientes</TableHead>
                            <TableHead>Horarios</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {coaches.map((coach) => (
                            <TableRow key={coach.id}>
                                <TableCell>{coach.id}</TableCell>
                                <TableCell>{coach.nombre}</TableCell>
                                <TableCell>{coach.especialidad}</TableCell>
                                <TableCell>{coach.clientes}</TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                        {coach.horarios.map((horario, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                                            >
                                                {horario}
                                            </span>
                                        ))}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AdminPageWrapper>
    );
}
