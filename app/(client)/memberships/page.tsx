import { CreditCard, History, Users, XCircle } from "lucide-react";
import Link from "next/link";
import { getMembershipData } from "@/src/services/memberships";
import { formatDate } from "@/lib/helpers";
import { getStatusBadgeLabel } from "@/lib/statusBadge";

export default async function MembershipsPage() {
    const memberships = await getMembershipData();
    const membership = memberships ? memberships[0] : null; // Tomamos la primera membresía activa

    if (!membership) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-2">Memberships</h1>
                <p className="text-muted-foreground mb-6">No tienes membresías activas.</p>
                <Link
                    href="/checkout/choose"
                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                >
                    Adquirir membresía
                </Link>
            </div>
        );
    }

    const quickActions = [
        {
            name: "Cambiar plan",
            icon: <Users className="w-5 h-5" />,
            href: "/dashboard/change-plan",
        },
        {
            name: "Cancelar membresía",
            icon: <XCircle className="w-5 h-5" />,
            href: "/cancelsubscription",
        },
        {
            name: "Ver historial de pagos",
            icon: <History className="w-5 h-5" />,
            href: "/dashboard/payment-history",
        },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">Memberships</h1>
            <p className="text-muted-foreground mb-6">Detalles de tu plan</p>

            {/* Membership Card */}
            <div className="rounded-xl shadow p-6 mb-8 border space-y-2">
                {/* Membership Header */}
                <div className="flex items-center justify-between mb-4">
                    <div
                        className={`inline-block px-2 rounded-full text-sm ${getStatusBadgeLabel(membership.subscription?.status || "CANCELED")
                                .className
                            }`}
                    >
                        {getStatusBadgeLabel(membership.subscription?.status || "CANCELED")
                            .label}
                    </div>
                </div>

                <h2 className="text-lg font-bold mb-1 uppercase">
                    {membership.subscription?.plan} Plan
                </h2>
                <p className="text-muted-foreground">
                    Vigente desde{" "}
                    <span className="text-foreground font-bold">
                        {formatDate(membership.validFrom || "")}
                    </span>{" "}
                    hasta{" "}
                    <span className="text-foreground font-bold">
                        {formatDate(membership.validTo || "")}
                    </span>
                </p>
            </div>

            {/* Payment Info */}
            <h2 className="text-xl font-semibold mb-3">Información de pago</h2>
            <div className="rounded-xl shadow p-6 mb-8 border space-y-4">
                <div className="flex flex-col text-muted-foreground">
                    <span className="font-bold text-foreground">Próximo pago</span>
                    <span>{formatDate(membership.validTo || "")}</span>

                    <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span>**** **** **** 1234</span>
                    </div>
                </div>

                <Link
                    href="/dashboard/payment-method"
                    className="flex p-2 font-semibold hover:bg-accent hover:text-foreground rounded-md transition"
                >
                    Gestionar método de pago
                </Link>
                <Link
                    href="/payments"
                    className="flex p-2 font-semibold hover:bg-accent hover:text-foreground rounded-md transition"
                >
                    Ver historial de pagos
                </Link>
            </div>

            {/* Quick Actions */}
            <h2 className="text-xl font-semibold mb-3">Opciones</h2>
            <div className="rounded-xl shadow divide-y border">
                {quickActions.map((action) => (
                    <Link
                        key={action.name}
                        href={action.href}
                        className="flex items-center justify-between p-4 hover:bg-accent transition"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-muted-foreground">{action.icon}</span>
                            <span className="font-medium">{action.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
