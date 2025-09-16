import { CheckCircle, XCircle, History, CreditCard } from "lucide-react";
import Link from "next/link";
import { getMembershipData } from "@/src/services/memberships";
import { formatDate } from "@/lib/helpers";
import { getStatusBadge } from "@/lib/statusBadge";

export default async function MembershipsPage() {
    const memberships = await getMembershipData();
    const membership = memberships ? memberships[0] : null;

    if (!membership) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-semibold mb-2">Memberships</h1>
                <p className="text-muted-foreground mb-6">
                    No tienes membresías activas.
                </p>
                <Link
                    href="/checkout/choose"
                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                >
                    Adquirir membresía
                </Link>
            </div>
        );
    }

    const status = membership.subscription?.status || "CANCELED";
    const isActive = status === "ACTIVE";

    return (
        <section>
            <h1 className="text-3xl font-bold mb-2">Membresías</h1>
            <p className="text-muted-foreground mb-6">Detalles de tu plan</p>

            {/* Membership Card */}
            <div className="rounded-xl shadow p-6 mb-8 border space-y-2">
                <div className="flex items-center justify-between mb-4">
                    <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(status, membership.validTo).className}`}
                    >
                        {getStatusBadge(status, membership.validTo).label}
                    </div>
                </div>

                <h2 className="text-lg font-semibold mb-1 uppercase">
                    {membership.subscription?.plan} Plan
                </h2>
                <p className="text-muted-foreground">
                    Vigente desde{" "}
                    <span className="text-foreground font-semibold">
                        {formatDate(membership.validFrom || "")}
                    </span>{" "}
                    hasta{" "}
                    <span className="text-foreground font-semibold">
                        {formatDate(membership.validTo || "")}
                    </span>
                </p>
            </div>

            {/* Payment Info */}
            <h2 className="text-xl font-semibold mb-3">Información de pago</h2>
            <div className="rounded-xl shadow p-6 mb-8 border space-y-4">
                <div className="flex flex-col text-muted-foreground">
                    <span className="font-semibold text-foreground">Próximo pago</span>
                    <span>{formatDate(membership.validTo || "")}</span>

                    <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span>{membership.subscription?.gateway}</span>
                    </div>
                </div>

                <Link
                    href="/payments"
                    className="flex items-center gap-2 p-2 font-semibold hover:bg-accent hover:text-foreground rounded-md transition"
                >
                    <History className="w-5 h-5" />
                    Ver historial de pagos
                </Link>
            </div>

            {/* Quick Actions */}
            <h2 className="text-xl font-semibold mb-3">Opciones</h2>
            <div className="rounded-xl shadow divide-y border">
                {isActive ? (
                    <Link
                        href="/cancelsubscription"
                        className="flex items-center gap-3 p-4 hover:bg-accent transition"
                    >
                        <XCircle className="w-6 h-6" />
                        <div>
                            <p className="">Cancelar suscripción</p>
                        </div>
                    </Link>
                ) : (
                    <Link
                        href="/checkout/choose"
                        className="flex items-center gap-3 p-4 hover:bg-accent transition"
                    >
                        <CheckCircle className="w-6 h-6" />
                        <div>
                            <p className="">Reactivar suscripción</p>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    );
}