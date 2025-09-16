"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const steps = [
    { label: "Plan", path: "/checkout/choose" },
    { label: "Identificación", path: "/checkout/person" },
    { label: "Pago", path: "/checkout/payment" },
];

export default function CheckoutSteps() {
    const pathname = usePathname();
    const current = steps.findIndex((s) => pathname.startsWith(s.path));

    return (
        <div className="mx-auto flex max-w-2xl items-center justify-between px-10">
            {steps.map((step, i) => {
                const active = current === i;
                const done = current > i;

                return (
                    <div key={step.path} className="flex flex-1 items-center">
                        {/* Línea izquierda */}
                        {i > 0 && (
                            <div
                                className={`h-px flex-1 transition-colors ${done
                                        ? "bg-gray-900 dark:bg-gray-100"
                                        : "bg-gray-300 dark:bg-gray-700"
                                    }`}
                            />
                        )}

                        {/* Círculo + label */}
                        <div className="flex flex-col items-center">
                            <div
                                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors
                  ${done || active
                                        ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-black"
                                        : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                    }`}
                            >
                                {i + 1}
                            </div>

                            <span
                                className={`mt-2 text-sm transition-colors ${active || done
                                        ? "font-medium text-gray-900 dark:text-gray-100"
                                        : "text-gray-500 dark:text-gray-400"
                                    }`}
                            >
                                {done ? <Link href={step.path}>{step.label}</Link> : step.label}
                            </span>
                        </div>

                        {/* Línea derecha */}
                        {i < steps.length - 1 && (
                            <div
                                className={`h-px flex-1 transition-colors ${done
                                        ? "bg-gray-900 dark:bg-gray-100"
                                        : "bg-gray-300 dark:bg-gray-700"
                                    }`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
