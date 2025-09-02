"use client";

import React, { useState } from "react";

type Cliente = {
    id: number;
    nombre: string;
    estado: "Activa" | "Vencida" | "En prueba";
    pagos: { fecha: string; monto: string; estado: string }[];
};

const clientes: Cliente[] = [
    {
        id: 1,
        nombre: "Juan Pérez",
        estado: "Activa",
        pagos: [
            { fecha: "2025-08-01", monto: "$50", estado: "Pagado" },
            { fecha: "2025-07-01", monto: "$50", estado: "Pagado" },
        ],
    },
    {
        id: 2,
        nombre: "María López",
        estado: "En prueba",
        pagos: [{ fecha: "2025-08-20", monto: "$0", estado: "Prueba gratuita" }],
    },
    {
        id: 3,
        nombre: "Carlos Gómez",
        estado: "Vencida",
        pagos: [
            { fecha: "2025-07-15", monto: "$50", estado: "Pendiente" },
            { fecha: "2025-06-15", monto: "$50", estado: "Pagado" },
        ],
    },
];

export default function ClientesPage() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Clientes</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full border rounded-lg bg-white shadow-sm">
                    <thead className="bg-gray-50 text-left">
                        <tr>
                            <th className="p-3 text-sm font-medium text-gray-600">Cliente</th>
                            <th className="p-3 text-sm font-medium text-gray-600">
                                Estado suscripción
                            </th>
                            <th className="p-3 text-sm font-medium text-gray-600">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((c) => (
                            <React.Fragment key={c.id}>
                                <tr className="border-t">
                                    <td className="p-3">{c.nombre}</td>
                                    <td className="p-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium
                      ${c.estado === "Activa"
                                                    ? "bg-green-100 text-green-600"
                                                    : c.estado === "Vencida"
                                                        ? "bg-red-100 text-red-600"
                                                        : "bg-yellow-100 text-yellow-600"
                                                }`}
                                        >
                                            {c.estado}
                                        </span>
                                    </td>
                                    <td className="p-3 space-x-2">
                                        <button
                                            className="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                                            onClick={() => alert("Renovar " + c.nombre)}
                                        >
                                            Renovar
                                        </button>
                                        <button
                                            className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                                            onClick={() => alert("Congelar " + c.nombre)}
                                        >
                                            Congelar
                                        </button>
                                        <button
                                            className="px-2 py-1 text-xs rounded bg-red-100 text-red-600 hover:bg-red-200"
                                            onClick={() => alert("Cancelar " + c.nombre)}
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            onClick={() =>
                                                setExpanded(expanded === c.id ? null : c.id)
                                            }
                                        >
                                            {expanded === c.id ? "Ocultar" : "Pagos"}
                                        </button>
                                    </td>
                                </tr>

                                {/* Historial de pagos */}
                                {expanded === c.id && (
                                    <tr className="bg-gray-50">
                                        <td colSpan={3} className="p-3">
                                            <p className="font-medium text-sm mb-2">
                                                Historial de pagos:
                                            </p>
                                            <ul className="space-y-1 text-sm text-gray-600">
                                                {c.pagos.map((p, i) => (
                                                    <li key={i} className="flex justify-between">
                                                        <span>{p.fecha}</span>
                                                        <span>{p.monto}</span>
                                                        <span>{p.estado}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
