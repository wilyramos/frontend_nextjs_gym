"use client";

import React from "react";

type Pago = {
    id: number;
    cliente: string;
    fecha: string;
    monto: string;
    metodo: "Mercado Pago" | "Stripe" | "PayPal";
    estado: "Pagado" | "Pendiente" | "Vencido";
};

const pagos: Pago[] = [
    {
        id: 1,
        cliente: "Juan Pérez",
        fecha: "2025-09-01",
        monto: "$50",
        metodo: "Mercado Pago",
        estado: "Pagado",
    },
    {
        id: 2,
        cliente: "Ana Gómez",
        fecha: "2025-08-28",
        monto: "$135",
        metodo: "Stripe",
        estado: "Pendiente",
    },
    {
        id: 3,
        cliente: "Carlos Ruiz",
        fecha: "2025-08-15",
        monto: "$480",
        metodo: "PayPal",
        estado: "Vencido",
    },
];

export default function BillingPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Facturación</h1>

            <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left text-sm text-gray-600">
                            <th className="p-3">Cliente</th>
                            <th className="p-3">Fecha</th>
                            <th className="p-3">Monto</th>
                            <th className="p-3">Método</th>
                            <th className="p-3">Estado</th>
                            <th className="p-3 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagos.map((pago) => (
                            <tr key={pago.id} className="border-b text-sm">
                                <td className="p-3">{pago.cliente}</td>
                                <td className="p-3">{pago.fecha}</td>
                                <td className="p-3 font-semibold">{pago.monto}</td>
                                <td className="p-3">{pago.metodo}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${pago.estado === "Pagado"
                                                ? "bg-green-100 text-green-600"
                                                : pago.estado === "Pendiente"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {pago.estado}
                                    </span>
                                </td>
                                <td className="p-3 text-center">
                                    <button className="px-3 py-1 text-xs rounded bg-indigo-100 text-indigo-600 hover:bg-indigo-200">
                                        Descargar PDF
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
