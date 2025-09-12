"use client";

import { useState } from "react";
import plans from "@/src/data/subscriptionPlans.json";
import CardPlan from "@/src/components/checkout/CardPlan";
import { toast } from "sonner";

export default function ChoosePage() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handleContinue = () => {
        if (!selectedPlan) {
            toast.error("Por favor, selecciona un plan antes de continuar");
            return;
        }
        // Navegar a summary si hay plan
        window.location.href = `/checkout/person?plan=${selectedPlan}`;
    };

    return (
        <div className="py-10 px-6 flex flex-col items-center">
            {/* Título */}
            <h1 className="text-4xl font-extrabold text-center text-black mb-6">
                Nuestros Planes
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mb-12">
                Escoge el plan que mejor se adapte a tus objetivos y comienza tu entrenamiento hoy mismo.
            </p>

            {/* Grid de Planes */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
                {plans.map((plan) => (
                    <CardPlan
                        key={plan.id}
                        name={plan.name}
                        price={plan.price}
                        duration={plan.duration}
                        features={plan.features}
                        onSelect={() => setSelectedPlan(plan.id)}
                        isSelected={selectedPlan === plan.id}
                        popular={plan.popular}
                    />
                ))}
            </div>

            {/* Botón Continuar */}
            <button
                onClick={handleContinue}
                className={`mt-12 inline-block rounded-full px-16 py-4 font-bold shadow-lg transition-all duration-300 ease-in-out
                ${selectedPlan
                        ? "bg-amber-300 text-black hover:bg-amber-400 hover:scale-105"
                        : "bg-gray-300 text-gray-600"
                    }`}
            >
                Continuar
            </button>
        </div>
    );
}