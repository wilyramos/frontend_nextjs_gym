// ChoosePage.tsx
"use client";

import React, { useState } from "react";

type Plan = {
    id: string;
    name: string;
    price: number;
    duration: string; // Ej: "Mensual", "Anual"
    features: string[];
};

const plans: Plan[] = [
    {
        id: "basic",
        name: "Básico",
        price: 29,
        duration: "Mensual",
        features: ["Acceso al gimnasio", "Clases grupales limitadas"],
    },
    {
        id: "premium",
        name: "Premium",
        price: 49,
        duration: "Mensual",
        features: ["Todo lo del básico", "Clases ilimitadas", "Sauna y spa"],
    },
    {
        id: "pro",
        name: "Pro",
        price: 79,
        duration: "Mensual",
        features: ["Todo lo del premium", "Entrenamiento personal", "Acceso VIP"],
    },
];

export default function ChoosePage() {
    const [selectedPlan, setSelectedPlan] = useState<string>("");

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Elige tu plan</h1>

            <div className="grid md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`border rounded-xl p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 ${selectedPlan === plan.id ? "border-black bg-gray-100" : "border-gray-200"
                            }`}
                    >
                        <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
                        <p className="text-gray-700 mb-4 text-lg">
                            ${plan.price} <span className="text-sm">/{plan.duration}</span>
                        </p>

                        <ul className="mb-4 space-y-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="text-gray-600 text-sm">
                                    • {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-2 rounded-md font-semibold ${selectedPlan === plan.id
                                    ? "bg-black text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                }`}
                        >
                            {selectedPlan === plan.id ? "Seleccionado" : "Elegir plan"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}