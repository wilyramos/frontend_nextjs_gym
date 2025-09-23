import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import subscriptionPlans from "@/src/data/subscriptionPlans.json";

export default function ListPricing() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="flex flex-col md:flex-row gap-2 justify-center">
                    {subscriptionPlans.map((plan) => (
                        <article
                            key={plan.id}
                            className={`flex-1 rounded-2xl border transition duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${plan.popular
                                    ? "border-red-700 bg-white relative"
                                    : "border-gray-200 bg-white"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-500 text-black text-sm font-semibold px-4 py-1 rounded-b-md">
                                    Más Popular
                                </div>
                            )}

                            <div className="p-4 flex flex-col">
                                <div className="mb-2">
                                    <h2 className="text-lg font-bold text-gray-900 my-4">
                                        {plan.name}
                                    </h2>
                                    <p className="text-xl font-extrabold text-gray-900">
                                        PEN {plan.price}
                                        <span className=" text-gray-500 text-xs"> /{plan.duration}</span>
                                    </p>
                                </div>

                                <ul className="flex-1 space-y-2 text-gray-700 text-left text-xs">
                                    {plan.features.map((feature: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <AiOutlineCheck className="text-red-700 w-5 h-5 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
