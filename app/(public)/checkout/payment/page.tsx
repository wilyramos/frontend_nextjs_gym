"use client";

import { useState } from "react";

export default function PaymentPage() {
    const [selected, setSelected] = useState("");

    const methods = [
        { id: "culqi", name: "Culqi" },
        { id: "mercadopago", name: "Mercado Pago" },
        { id: "izipay", name: "Izipay" },
    ];

    const handleSubmit = () => {
        if (!selected) {
            alert("Por favor, selecciona un método de pago");
            return;
        }
        alert(`Redirigiendo a ${selected}...`);
    };

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold">Pago</h1>
            <p className="text-gray-600">Selecciona tu método de pago</p>

            <div className="mt-6 space-y-4 w-full max-w-sm">
                {methods.map((method) => (
                    <label
                        key={method.id}
                        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition 
              ${selected === method.id ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                    >
                        <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={selected === method.id}
                            onChange={() => setSelected(method.id)}
                            className="h-4 w-4 text-blue-600"
                        />
                        <span className="text-gray-700">{method.name}</span>
                    </label>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="mt-6 w-full max-w-sm bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
                Continuar
            </button>
        </div>
    );
}
