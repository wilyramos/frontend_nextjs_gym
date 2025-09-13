import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";
import subscriptionPlans from "@/src/data/subscriptionPlans.json";

export default function ListPricing() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    {subscriptionPlans.map((plan) => (
                        <article
                            key={plan.id}
                            className={`flex-1 rounded-2xl border transition duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${plan.popular
                                    ? "border-amber-500 bg-white relative"
                                    : "border-gray-200 bg-white"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-sm font-semibold px-4 py-1 rounded-b-md">
                                    Más Popular
                                </div>
                            )}

                            <div className="p-8 flex flex-col h-full">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h2>
                                    <p className="text-3xl font-extrabold text-gray-900">
                                        PEN {plan.price}
                                        <span className="text-base text-gray-500"> /{plan.duration}</span>
                                    </p>
                                </div>

                                <ul className="flex-1 space-y-4 text-gray-700 text-left">
                                    {plan.features.map((feature: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <AiOutlineCheck className="text-amber-400 w-5 h-5 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                <Link
                    href="/checkout/choose"
                    className="mt-12 inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-12 rounded-xl shadow transition-colors"
                >
                    Inscribirme
                </Link>
            </div>
        </section>
    );
}
