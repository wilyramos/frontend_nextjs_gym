"use client";

import { useState, useTransition } from "react";
import { createSubscriptionAction } from "@/app/(public)/checkout/actions";
import { toast } from "sonner";

type GatewaySelectorProps = {
    subscriptionId: number;
};

export default function GatewaySelector({ subscriptionId }: GatewaySelectorProps) {
    const [selected, setSelected] = useState("");
    const [isPending, startTransition] = useTransition();

    const methods = [
        { id: "culqi", name: "Culqi", disabled: true },
        { id: "mercadopago", name: "Mercado Pago", disabled: false },
        { id: "izipay", name: "Izipay", disabled: true },
    ];

    const handleSubmit = () => {
        if (!selected) {
            toast.error("Por favor, selecciona un método de pago");
            return;
        }

        if (selected === "mercadopago") {
            startTransition(async () => {
                try {
                    const data = await createSubscriptionAction(subscriptionId);

                    const initPoint = data?.mpResponse?.init_point;
                    if (initPoint) {
                        toast.success("Redirigiendo a MercadoPago...");
                        window.location.href = initPoint;
                    } else {
                        toast.error("No se pudo obtener la URL de pago");
                    }
                } catch (err) {
                    toast.error(
                        err instanceof Error ? err.message : "Error con MercadoPago"
                    );
                }
            });
        } else {
            toast.info(`Redirigiendo a ${selected}...`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 ">
            <div className="space-y-8 w-full max-w-sm">
                {methods.map((method) => (
                    <label
                        key={method.id}
                        className={`flex items-center gap-3 p-3 border rounded-lg transition 
                            ${selected === method.id ? "border-black bg-gray-100" : "border-gray-300"} 
                            ${method.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                        `}
                    >
                        <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={selected === method.id}
                            onChange={() => !method.disabled && setSelected(method.id)}
                            disabled={method.disabled}
                            className="h-4 w-4 accent-black"
                        />
                        <span className="text-gray-900">{method.name}</span>
                        {method.disabled && (
                            <span className="ml-auto text-xs text-gray-500">(Próximamente)</span>
                        )}
                    </label>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                disabled={isPending || !selected}
                className="mt-6 w-full max-w-sm bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
            >
                {isPending ? "Procesando..." : "Pagar suscripción"}
            </button>
        </div>
    );
}
