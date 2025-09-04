"use client";

import React from "react";
import { CreditCard, History, Users, PauseCircle, XCircle } from "lucide-react";
import Link from "next/link";

// Helpers
function getDaysRemaining(validTo: string) {
    const today = new Date();
    const endDate = new Date(validTo);
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function getStatusBadge(status: string, validTo: string) {
    const days = getDaysRemaining(validTo);

    switch (status) {
        case "ACTIVE":
            return {
                label: `Activo - ${days} días restantes`,
                className: "bg-amber-300 text-black",
            };
        case "PAUSED":
            return { label: "Pausado", className: "bg-gray-200 text-black" };
        case "EXPIRED":
            return { label: "Expirado", className: "bg-black text-white" };
        default:
            return { label: "Sin membresía", className: "bg-gray-200 text-black" };
    }
}

export default function MembershipsPage() {
    // 🔹 Simulación de datos que vendrían del backend
    const membership = {
        plan: "Premium",
        status: "ACTIVE",
        validFrom: "2025-01-01",
        validTo: "2025-12-31",
        cardLast4: "3258",
    };

    const status = getStatusBadge(membership.status, membership.validTo);

    const quickActions = [
        {
            name: "Cambiar plan",
            icon: <Users className="w-5 h-5" />,
            href: "/dashboard/change-plan",
        },
        {
            name: "Pausar membresía",
            icon: <PauseCircle className="w-5 h-5" />,
            href: "/dashboard/pause-membership",
        },
        {
            name: "Cancelar membresía",
            icon: <XCircle className="w-5 h-5" />,
            href: "/dashboard/cancel-membership",
        },
        {
            name: "Ver historial de pagos",
            icon: <History className="w-5 h-5" />,
            href: "/dashboard/payment-history",
        },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-black mb-2">Memberships</h1>
            <p className="text-gray-500 mb-6">Plan Details</p>

            {/* Membership Card */}
            <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200">
                <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${status.className}`}
                >
                    {status.label}
                </div>
                <h2 className="text-xl font-semibold text-black mb-1">
                    {membership.plan} Plan
                </h2>
                <p className="text-gray-700">
                    Vigente desde{" "}
                    <span className="font-medium text-black">
                        {new Date(membership.validFrom).toLocaleDateString()}
                    </span>{" "}
                    hasta{" "}
                    <span className="font-medium text-black">
                        {new Date(membership.validTo).toLocaleDateString()}
                    </span>
                </p>
            </div>

            {/* Payment Info */}
            <h2 className="text-xl font-semibold text-black mb-3">Payment Info</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200">
                <p className="text-gray-700 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-gray-500" />
                    Tarjeta usada: •••• •••• •••• {membership.cardLast4}
                </p>
                <button className="mt-4 px-4 py-2 rounded-lg bg-amber-300 text-black font-medium hover:bg-amber-300/80 transition">
                    Gestionar método de pago
                </button>
            </div>

            {/* Quick Actions */}
            <h2 className="text-xl font-semibold text-black mb-3">Opciones</h2>
            <div className="bg-white rounded-xl shadow divide-y divide-gray-200 border border-gray-200">
                {quickActions.map((action) => (
                    <Link
                        key={action.name}
                        href={action.href}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-gray-600">{action.icon}</span>
                            <span className="font-medium text-black">{action.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
