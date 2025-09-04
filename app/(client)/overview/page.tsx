"use client";

import React from "react";
import { CreditCard, Users, Plus, Settings } from "lucide-react";
import Link from "next/link";

// Función para calcular días restantes
function getDaysRemaining(nextPayment: string) {
    const today = new Date();
    const paymentDate = new Date(nextPayment);
    const diffTime = paymentDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Función para obtener estado de la membresía
function getMembershipStatus(nextPayment: string | null) {
    if (!nextPayment) return { label: "Sin membresía", color: "bg-gray-200 text-black" };
    const days = getDaysRemaining(nextPayment);
    if (days < 0) return { label: "Expirado", color: "bg-black text-white" };
    return { label: "Activo", color: "bg-amber-300 text-black", days };
}

export default function OverviewPage() {
    const membership = {
        plan: "Premium",
        memberSince: "April 2022",
        nextPayment: "2025-10-04",
        cardLast4: "3258",
    };

    const status = getMembershipStatus(membership.nextPayment);

    const quickLinks = [
        { name: "Change plan", icon: <Users className="w-5 h-5" />, href: "/dashboard/change-plan" },
        { name: "Manage payment method", icon: <CreditCard className="w-5 h-5" />, href: "/dashboard/payments" },
        { name: "Buy extra class slot", icon: <Plus className="w-5 h-5" />, href: "/dashboard/buy-slot", badge: "New" },
        { name: "Settings", icon: <Settings className="w-5 h-5" />, href: "/dashboard/settings" },
    ];

    return (
        <div className="">
            <h1 className="text-3xl font-bold text-black mb-2">Account</h1>
            <p className="text-gray-500 mb-6">Membership Details</p>

            {/* Membership Card */}
            <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${status.color}`}>
                    {status.label}
                    {status.days !== undefined && status.label === "Activo" && ` - ${status.days} días restantes`}
                </div>
                <h2 className="text-xl font-semibold text-black mb-1">{membership.plan} plan</h2>
                {membership.nextPayment && (
                    <p className="text-gray-700 mb-2">Next payment: {new Date(membership.nextPayment).toLocaleDateString()}</p>
                )}
                {membership.cardLast4 && (
                    <p className="text-gray-700 mb-4 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-gray-500" />
                        •••• •••• •••• {membership.cardLast4}
                    </p>
                )}
                <Link
                    href="/dashboard/manage-membership"
                    className="text-black font-medium hover:underline"
                >
                    Manage membership
                </Link>
            </div>

            {/* Quick Links */}
            <h3 className="text-black font-semibold mb-2">Quick Links</h3>
            <div className="bg-white rounded-xl shadow divide-y divide-gray-200 border border-gray-200">
                {quickLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-gray-600">{link.icon}</span>
                            <span className="font-medium text-black">{link.name}</span>
                        </div>
                        {link.badge && (
                            <span className="text-xs bg-amber-300 text-black px-2 py-0.5 rounded-full font-medium">
                                {link.badge}
                            </span>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}