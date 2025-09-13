'use client';

import { cancelSubscription } from "@/app/(client)/cancelsubscription/actions";
import { toast } from "sonner";
import { useState } from "react";

export default function CancelButton() {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        try {
            setLoading(true);
            await cancelSubscription();
            toast.success("Suscripción cancelada correctamente");
        } catch (error: unknown) {
            // Extraer mensaje seguro del error
            const message =
                error instanceof Error ? error.message : "No se pudo cancelar la suscripción";
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition disabled:opacity-50 cursor-pointer"
        >
            {loading ? "Cancelando..." : "Cancelar suscripción"}
        </button>
    );
}