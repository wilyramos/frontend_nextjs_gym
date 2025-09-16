import GatewaySelector from "@/src/components/checkout/GatewaySelector";
import { createSubscription } from "./actions";

type SearchParams = Promise<{
    plan: string;
}>;

export default async function PaymentPage({ searchParams }: { searchParams: SearchParams }) {
    const { plan } = await searchParams;
    // Crear la suscripción en el servidor
    const subscription = await createSubscription({ plan });

    if (!subscription) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-xl font-bold mb-4">Error</h1>
                <p>No se pudo crear la suscripción. Intenta de nuevo.</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Selecciona tu método de pago</h1>

            {/* Solo mostramos el selector de pasarela */}
            {subscription.id && <GatewaySelector subscriptionId={subscription.id} />}
        </div>
    );
}
