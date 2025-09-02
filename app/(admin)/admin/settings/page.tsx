"use client";

import React from "react";

export default function SettingsPage() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Configuración</h1>

            {/* Perfil */}
            <section className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold mb-3">Perfil del Admin</h2>
                <p className="text-sm text-gray-600">Actualizar nombre, correo, foto.</p>
            </section>

            {/* Seguridad */}
            <section className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold mb-3">Seguridad</h2>
                <p className="text-sm text-gray-600">Cambiar contraseña, activar 2FA.</p>
            </section>

            {/* Facturación */}
            <section className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold mb-3">Preferencias de Facturación</h2>
                <p className="text-sm text-gray-600">Moneda, impuestos, logo de facturas.</p>
            </section>
        </div>
    );
}
