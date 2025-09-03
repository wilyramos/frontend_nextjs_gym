import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";

type Plan = {
    id: string;
    name: string;
    price: number;
    duration: string;
    features: string[];
    description?: string;
    popular?: boolean;
};

const plans: Plan[] = [
    {
        id: "basic",
        name: "Básico",
        price: 29,
        duration: "Mensual",
        description: "Para quienes desean iniciar su rutina de entrenamiento.",
        features: [
            "Acceso al gimnasio completo (pesas y máquinas)",
            "Clases grupales básicas: cardio y stretching",
            "Zona funcional y cardio",
            "Locker personal",
            "Wi-Fi disponible en áreas comunes",
        ],
    },
    {
        id: "standard",
        name: "Estándar",
        price: 49,
        duration: "Mensual",
        description: "Entrena con más libertad y acceso a servicios adicionales.",
        features: [
            "Todo lo del Básico",
            "Clases grupales ilimitadas: Yoga, Pilates, Spinning",
            "Piscina y sauna",
            "Evaluación física mensual",
            "Acceso a talleres de nutrición y bienestar",
            "Área de entrenamiento funcional avanzada",
        ],
        popular: true,
    },
    {
        id: "premium",
        name: "Premium",
        price: 79,
        duration: "Mensual",
        description: "Experiencia completa con servicios personalizados.",
        features: [
            "Todo lo del Estándar",
            "Entrenamiento personal semanal",
            "Clases premium: Crossfit, HIIT, Yoga avanzado",
            "Acceso VIP a eventos y talleres especiales",
            "Asesoría nutricional personalizada",
            "Prioridad en reservas de clases y equipos",
            "Área de relajación: spa, sauna y masajes",
        ],
    },
];

export default function ListPricing() {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-6">
            <h1 className="text-4xl font-bold text-center text-black mb-12">Nuestros Planes</h1>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`flex-1 border rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105
                        ${plan.popular ? "border-amber-300 bg-white md:-translate-y-3" : "border-gray-200 bg-white"}`}
                    >
                        {plan.popular && (
                            <div className="bg-amber-300 text-black text-sm font-bold text-center py-1">
                                Más Popular
                            </div>
                        )}

                        <div className="p-6 flex flex-col h-full justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-black mb-2">{plan.name}</h2>
                                {plan.description && <p className="text-gray-700 mb-4">{plan.description}</p>}
                                <p className="text-black text-2xl font-bold mb-6">
                                    PEN {plan.price} <span className="text-gray-700 text-base">/{plan.duration}</span>
                                </p>

                                <ul className="mb-6 space-y-3 text-gray-700">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <AiOutlineCheck className="text-amber-300 w-5 h-5 flex-shrink-0" />
                                            <span className="text-gray-800">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="/checkout/choose"
                                className={`mt-4 mb-10 w-full py-2 rounded-lg font-bold text-white transition-colors flex justify-center items-center 
                  ${plan.popular ? "bg-amber-400 hover:bg-amber-400" : "bg-gray-800 hover:bg-gray-900 "}`}
                            >
                                Inscribirme
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
