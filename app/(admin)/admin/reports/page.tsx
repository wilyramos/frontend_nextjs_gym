"use client";

import React from "react";

export default function ReportsPage() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Reportes</h1>

            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-lg shadow text-center">
                    <p className="text-sm text-gray-500">Ingresos (Ago 2025)</p>
                    <p className="text-xl font-bold text-green-600">$4,250</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow text-center">
                    <p className="text-sm text-gray-500">Clientes Activos</p>
                    <p className="text-xl font-bold text-blue-600">120</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow text-center">
                    <p className="text-sm text-gray-500">Retención</p>
                    <p className="text-xl font-bold text-green-500">82%</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow text-center">
                    <p className="text-sm text-gray-500">Deserción</p>
                    <p className="text-xl font-bold text-red-500">18%</p>
                </div>
            </div>

            {/* Secciones visuales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="font-semibold mb-2">Ingresos por Mes</h2>
                    <div className="h-40 flex items-center justify-center text-gray-400">
                        📊 Aquí va un gráfico de barras
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="font-semibold mb-2">Clientes Activos vs Inactivos</h2>
                    <div className="h-40 flex items-center justify-center text-gray-400">
                        🥧 Aquí va un gráfico de torta
                    </div>
                </div>
            </div>
        </div>
    );
}
