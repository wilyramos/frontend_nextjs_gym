
import { CreditCard, History, Users, PauseCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { getStatusBadge } from "@/lib/statusBadge";
import { getMembershipData } from "@/src/services/memberships";

export default async function MembershipsPage() {
    const memberships = await getMembershipData(); // 👈 ahora viene del backend
    const membership = memberships[0]; // si solo quieres mostrar la primera (actual)

    if (!membership) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold text-black mb-2">Memberships</h1>
                <p className="text-gray-500 mb-6">No tienes membresías activas.</p>
                <Link
                    href="/dashboard/change-plan"
                    className="px-4 py-2 rounded-lg bg-amber-300 text-black font-medium hover:bg-amber-300/80 transition"
                >
                    Adquirir membresía
                </Link>
            </div>
        );
    }

    const status = getStatusBadge(membership.status, membership.validTo);

    const quickActions = [
        {
            name: "Cambiar plan",
            icon: <Users className="w-5 h-5" />,
            href: "/dashboard/change-plan",
        },
        {
            name: "Pausar membresía",
            icon: <PauseCircle className="w-5 h-5" />,
            href: "/dashboard/pause-membership",
        },
        {
            name: "Cancelar membresía",
            icon: <XCircle className="w-5 h-5" />,
            href: "/dashboard/cancel-membership",
        },
        {
            name: "Ver historial de pagos",
            icon: <History className="w-5 h-5" />,
            href: "/dashboard/payment-history",
        },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-black mb-2">Memberships</h1>
            <p className="text-gray-500 mb-6">Detalles de tu plan</p>

            {/* Membership Card */}
            <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200">
                <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${status.className}`}
                >
                    {status.label}
                </div>
                <h2 className="text-xl font-semibold text-black mb-1">
                    {membership.subscription.plan} Plan
                </h2>
                <p className="text-gray-700">
                    Vigente desde{" "}
                    <span className="font-medium text-black">
                        {new Date(membership.validFrom).toLocaleDateString()}
                    </span>{" "}
                    hasta{" "}
                    <span className="font-medium text-black">
                        {new Date(membership.validTo).toLocaleDateString()}
                    </span>
                </p>
            </div>

            {/* Payment Info */}
            <h2 className="text-xl font-semibold text-black mb-3">Payment Info</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200">
                <p className="text-gray-700 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-gray-500" />
                    {/* si guardas tarjeta */}
                    {membership.subscription.externalId
                        ? `Referencia: ${membership.subscription.externalId}`
                        : "Método de pago registrado en tu cuenta"}
                </p>
                <button className="mt-4 px-4 py-2 rounded-lg bg-amber-300 text-black font-medium hover:bg-amber-300/80 transition">
                    Gestionar método de pago
                </button>
            </div>

            {/* Quick Actions */}
            <h2 className="text-xl font-semibold text-black mb-3">Opciones</h2>
            <div className="bg-white rounded-xl shadow divide-y divide-gray-200 border border-gray-200">
                {quickActions.map((action) => (
                    <Link
                        key={action.name}
                        href={action.href}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-gray-600">{action.icon}</span>
                            <span className="font-medium text-black">{action.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
