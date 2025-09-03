"use client";

import { useState, useEffect } from "react";
import { useCheckoutStore } from "@/src/store/checkoutStore";
import { SubscriptionPlanEnumValues } from "@/src/types";
import Link from "next/link";

type Plan = {
    id: SubscriptionPlanEnumValues;
    name: string;
    price: number;
    duration: string;
    features: string[];
};

const plans: Plan[] = [
    {
        id: SubscriptionPlanEnumValues.MONTHLY,
        name: "Básico",
        price: 29,
        duration: "Mensual",
        features: ["Acceso al gimnasio", "Clases grupales limitadas"],
    },
    {
        id: SubscriptionPlanEnumValues.TRIMESTRAL,
        name: "Intermedio",
        price: 79,
        duration: "Trimestral",
        features: ["Todo lo del básico", "Clases grupales ilimitadas"],
    },
    {
        id: SubscriptionPlanEnumValues.YEARLY,
        name: "Pro",
        price: 249,
        duration: "Anual",
        features: ["Todo lo del intermedio", "Entrenamiento personal", "Acceso VIP"],
    },
    {
        id: SubscriptionPlanEnumValues.PREMIUM,
        name: "Premium",
        price: 499,
        duration: "Anual",
        features: ["Todo lo del Pro", "Sauna y spa ilimitado", "Clases especiales"],
    },
];

export default function ChoosePage() {
    const subscription = useCheckoutStore((state) => state.subscription);
    const setSubscription = useCheckoutStore((state) => state.setSubscription);

    const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanEnumValues>(
        (subscription.plan as SubscriptionPlanEnumValues) || plans[0].id
    );


    useEffect(() => {
        if (selectedPlan) {
            setSubscription({ plan: selectedPlan });
        }
    }, [selectedPlan, setSubscription]);

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">
                Elige tu plan
            </h1>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
                {plans.map((plan) => {
                    const isSelected = selectedPlan === plan.id;
                    const borderBg = isSelected ? "border-black bg-gray-100" : "border-gray-300 bg-white";

                    return (
                        <div
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            className={`cursor-pointer rounded-xl p-6 flex flex-col justify-between transition-transform duration-300 transform hover:scale-105 border ${borderBg}`}
                        >
                            <div>
                                <h2 className="text-xl font-semibold mb-2 text-gray-900">{plan.name}</h2>
                                <p className="text-gray-700 mb-4 text-lg">
                                    ${plan.price} <span className="text-sm text-gray-500">/{plan.duration}</span>
                                </p>

                                <ul className="mb-4 space-y-1">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="text-gray-600 text-sm">
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center">
                <Link
                    href="/checkout/person"
                    className="inline-block px-8 py-3 font-semibold text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
                >
                    Continuar
                </Link>
            </div>
        </div>
    );
}