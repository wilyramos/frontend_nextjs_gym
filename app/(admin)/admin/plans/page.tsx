"use client";

import React from "react";

type Plan = {
    id: number;
    nombre: string;
    duracion: string;
    precio: string;
    beneficios: string[];
    activo: boolean;
};

const planes: Plan[] = [
    {
        id: 1,
        nombre: "Mensual",
        duracion: "1 mes",
        precio: "$50",
        beneficios: ["Acceso ilimitado al gym", "Clases grupales incluidas"],
        activo: true,
    },
    {
        id: 2,
        nombre: "Trimestral",
        duracion: "3 meses",
        precio: "$135",
        beneficios: ["Acceso ilimitado al gym", "Clases grupales", "1 asesoría personal"],
        activo: true,
    },
    {
        id: 3,
        nombre: "Anual",
        duracion: "12 meses",
        precio: "$480",
        beneficios: ["Acceso ilimitado al gym", "Clases grupales", "Entrenador personal mensual"],
        activo: false,
    },
];

export default function PlansPage() {
    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Planes de Suscripción</h1>
                <button className="px-4 py-2 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700">
                    + Nuevo Plan
                </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {planes.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-white rounded-xl shadow-sm p-5 flex flex-col justify-between"
                    >
                        {/* Header */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-lg font-semibold">{plan.nombre}</h2>
                                <span
                                    className={`px-2 py-1 text-xs rounded-full ${plan.activo
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {plan.activo ? "Activo" : "Inactivo"}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-1">Duración: {plan.duracion}</p>
                            <p className="text-2xl font-bold text-indigo-600 mb-3">{plan.precio}</p>

                            <ul className="text-sm text-gray-600 space-y-1">
                                {plan.beneficios.map((b, i) => (
                                    <li key={i}>• {b}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Footer - Acciones */}
                        <div className="flex gap-2 mt-4">
                            <button className="flex-1 px-3 py-1 text-sm rounded bg-indigo-100 text-indigo-600 hover:bg-indigo-200">
                                Editar
                            </button>
                            <button
                                className={`flex-1 px-3 py-1 text-sm rounded ${plan.activo
                                        ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                                        : "bg-green-100 text-green-600 hover:bg-green-200"
                                    }`}
                            >
                                {plan.activo ? "Desactivar" : "Activar"}
                            </button>
                            <button className="flex-1 px-3 py-1 text-sm rounded bg-red-100 text-red-600 hover:bg-red-200">
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
