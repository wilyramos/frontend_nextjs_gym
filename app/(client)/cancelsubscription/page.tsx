import BackButton from "@/src/components/common/BackButton";
import CancelButton from "@/src/components/subscriptions/CancelButton";
import { getMembershipData } from "@/src/services/memberships";



export default async function CancelSubscriptionPage() {


    const memberships = await getMembershipData();
    return (
        <div className="">
            <BackButton />
            <h1 className="text-3xl font-bold">Administra tu suscripción</h1>
            <p className="mb-6">
                Aquí puedes cancelar tu suscripción actual. Al hacerlo, perderás acceso a los beneficios
            </p>

            {/* Botón que llama al servicio para cancelar */}
            {/* {membership && membership.subscription?.status === "ACTIVE" ? (
                <CancelButton />
            ) : (
                <p className="text-muted-foreground">No tienes una suscripción activa para cancelar.</p>
            )} */}

            <CancelButton />
        </div>
    );
}
