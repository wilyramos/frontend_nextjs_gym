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
                        {i > 0 && (
                            <div className={`h-px flex-1 ${done ? "bg-black" : "bg-gray-600"}`} />
                        )}

                        <div className="flex flex-col items-center">
                            <div
                                className={`flex h-6 w-6 items-center justify-center rounded-full text-white text-xs font-bold ${done || active ? "bg-black" : "bg-gray-600"
                                    }`}
                            >
                                {i + 1}
                            </div>
                            <span
                                className={`mt-2 text-sm ${active || done ? "text-black font-medium" : "text-gray-600"
                                    }`}
                            >
                                {done ? <Link href={step.path}>{step.label}</Link> : step.label}
                            </span>
                        </div>

                        {i < steps.length - 1 && (
                            <div className={`h-px flex-1 ${done ? "bg-black" : "bg-gray-600"}`} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
