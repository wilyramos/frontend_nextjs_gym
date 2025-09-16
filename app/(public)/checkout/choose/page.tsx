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
        window.location.href = `/checkout/person?plan=${selectedPlan}`;
    };

    return (
        <div className="flex flex-col items-center px-4 md:px-0">
            {/* Título */}
            <p className="text-gray-500 text-center max-w-2xl text-xs md:text-base my-4 md:mb-12">
                Escoge el plan que mejor se adapte a tus objetivos y comienza tu entrenamiento hoy mismo.
            </p>

            {/* Grid de Planes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl w-full">
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
                className={`w-full max-w-xl mx-auto mt-6 py-2 px-6 font-semibold rounded transition-colors cursor-pointer duration-200
          ${selectedPlan
                        ? "bg-red-700 hover:text-black border-2 border-red-700"
                        : "bg-gray-200 text-black cursor-not-allowed"
                    }`}
            >
                Continuar
            </button>
        </div>
    );
}
