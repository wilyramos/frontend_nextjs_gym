"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const steps = [
    { label: "Plan", path: "/checkout/choose" },
    { label: "Identificación", path: "/checkout/person" },
    { label: "Pago", path: "/checkout/payment" },
];

export default function CheckoutSteps() {
    const pathname = usePathname();
    const currentStepIndex = steps.findIndex((s) => pathname.startsWith(s.path));

    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-6 max-w-4xl mx-auto">
            {steps.map((step, index) => {
                const isActive = currentStepIndex === index;
                const isCompleted = currentStepIndex > index;

                return (
                    <div key={step.path} className="flex-1 flex items-center">
                        {/* Línea antes del paso */}
                        {index !== 0 && (
                            <div
                                className={cn(
                                    "hidden md:block h-1 flex-1 transition-colors",
                                    isCompleted ? "bg-gray-900" : "bg-gray-400"
                                )}
                            />
                        )}

                        {/* Paso */}
                        <div className="flex flex-col items-center text-center">
                            <div
                                className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                                    isCompleted
                                        ? "bg-gray-900 text-white"
                                        : isActive
                                            ? "bg-amber-300 text-black"
                                            : "bg-gray-700 text-gray-300"
                                )}
                            >
                                {index + 1}
                            </div>
                            <span
                                className={cn(
                                    "mt-2 text-sm md:text-base transition-colors",
                                    isActive
                                        ? "text-amber-300 font-bold"
                                        : isCompleted
                                            ? "text-white cursor-pointer hover:text-amber-300"
                                            : "text-gray-400"
                                )}
                            >
                                {isCompleted ? (
                                    <Link href={step.path}>{step.label}</Link>
                                ) : (
                                    step.label
                                )}
                            </span>
                        </div>

                        {/* Línea después del paso */}
                        {index !== steps.length - 1 && (
                            <div
                                className={cn(
                                    "hidden md:block h-1 flex-1 transition-colors",
                                    currentStepIndex > index ? "bg-gray-900" : "bg-gray-400"
                                )}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
