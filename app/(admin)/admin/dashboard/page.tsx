import React from "react";

export default function DashboardPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

            {/* Grid de estadísticas */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Clientes activos */}
                <div className="bg-white rounded-xl shadow-sm p-4">
                    <p className="text-sm text-gray-500">Clientes activos</p>
                    <h2 className="text-2xl font-bold text-indigo-600">152</h2>
                </div>

            </div>
        </div>
    );
}
