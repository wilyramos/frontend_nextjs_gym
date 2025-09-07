import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import subscriptionPlans from "@/src/data/subscriptionPlans.json";

export default function ListPricing() {
    return (
        <div className="bg-white min-h-screen py-16 px-6">
            <h1 className="text-4xl font-bold text-center text-black mb-12">
                Nuestros Planes
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
                {subscriptionPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`flex-1 border rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105
              ${plan.popular
                                ? "border-amber-300 bg-white md:-translate-y-3"
                                : "border-gray-200 bg-white"
                            }`}
                    >
                        {/* Badge */}
                        {plan.popular && (
                            <div className="bg-amber-300 text-black text-sm font-bold text-center py-1">
                                Más Popular
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-6 flex flex-col h-full justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-black mb-2">
                                    {plan.name}
                                </h2>

                                <p className="text-black text-2xl font-bold mb-6">
                                    PEN {plan.price}{" "}
                                    <span className="text-gray-600 text-base">
                                        /{plan.duration}
                                    </span>
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
                                href={`/checkout/payment?plan=${plan.id}`}
                                className={`mt-4 mb-4 w-full py-2 rounded-lg font-bold text-white transition-colors flex justify-center items-center 
                  ${plan.popular
                                        ? "bg-amber-300 hover:bg-amber-400 text-black"
                                        : "bg-black hover:bg-gray-900"
                                    }`}
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
