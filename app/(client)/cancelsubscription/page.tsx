import CancelButton from "@/src/components/subscriptions/CancelButton";

export default function CancelSubscriptionPage() {

    return (
        <div className="">
            <h1 className="text-2xl font-bold">Administra tu suscripción</h1>
            <p className="mb-6">
                Aquí puedes cancelar tu suscripción actual. Al hacerlo, perderás acceso a los beneficios
            </p>

            {/* Botón que llama al servicio para cancelar */}
            <CancelButton />
        </div>
    );
}
