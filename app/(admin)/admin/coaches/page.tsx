"use client";

import React from "react";

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
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Entrenadores</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full border rounded-lg bg-white shadow-sm">
                    <thead className="bg-gray-50 text-left">
                        <tr>
                            <th className="p-3 text-sm font-medium text-gray-600">Entrenador</th>
                            <th className="p-3 text-sm font-medium text-gray-600">Especialidad</th>
                            <th className="p-3 text-sm font-medium text-gray-600">Clientes</th>
                            <th className="p-3 text-sm font-medium text-gray-600">Disponibilidad</th>
                            <th className="p-3 text-sm font-medium text-gray-600">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coaches.map((c) => (
                            <tr key={c.id} className="border-t">
                                <td className="p-3">{c.nombre}</td>
                                <td className="p-3">{c.especialidad}</td>
                                <td className="p-3">{c.clientes}</td>
                                <td className="p-3">
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {c.horarios.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="p-3 space-x-2">
                                    <button
                                        className="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                                        onClick={() => alert("Asignar cliente a " + c.nombre)}
                                    >
                                        Asignar cliente
                                    </button>
                                    <button
                                        className="px-2 py-1 text-xs rounded bg-green-100 text-green-600 hover:bg-green-200"
                                        onClick={() => alert("Asignar clase a " + c.nombre)}
                                    >
                                        Asignar clase
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
