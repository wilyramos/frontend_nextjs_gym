"use client";

import { useState } from "react";
import plans from "@/src/data/subscriptionPlans.json";
import CardPlan from "@/src/components/checkout/CardPlan";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

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
            <p className="text-gray-500 text-center max-w-2xl text-sm md:text-base my-4 md:mb-10">
                Escoge el plan que mejor se adapte a tus objetivos y comienza tu entrenamiento hoy mismo.
            </p>

            {/* Grid de Planes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full">
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

            {/* Botón Continuar con shadcn/ui */}
            <Button
                onClick={handleContinue}
                disabled={!selectedPlan}
                className={`w-full max-w-md mt-8 py-6 text-lg font-semibold
          ${selectedPlan
                        ? "bg-red-700 hover:bg-red-800 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
            >
                Continuar
            </Button>
        </div>
    );
}
