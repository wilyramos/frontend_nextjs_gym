
import { CreditCard, History, Users, XCircle } from "lucide-react";
import Link from "next/link";
import { getMembershipData } from "@/src/services/memberships";
import { formatDate } from "@/lib/helpers";
import { getStatusBadgeLabel } from "@/lib/statusBadge";

export default async function MembershipsPage() {
    const memberships = await getMembershipData(); // 👈 ahora viene del backend

    const membership = memberships ? memberships[0] : null; // Tomamos la primera membresía activa
    if (!membership) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold text-black mb-2">Memberships</h1>
                <p className="text-gray-500 mb-6">No tienes membresías activas.</p>
                <Link
                    href="/checkout/choose"
                    className="px-4 py-2 rounded-lg bg-amber-300 text-black font-medium hover:bg-amber-300/80 transition"
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
        <div className="">
            <h1 className="text-3xl font-bold text-black mb-2">Memberships</h1>
            <p className="text-gray-500 mb-6">Detalles de tu plan</p>

            {/* Membership Card */}
            <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200">

                {/* Membership Header */}
                <div className="flex items-center justify-between mb-4">
                    {/* Status Badge */}
                    <div
                        className={`inline-block px-2  rounded-full text-sm ${getStatusBadgeLabel(membership.subscription?.status || "CANCELED").className
                            }`}
                    >
                        {getStatusBadgeLabel(membership.subscription?.status || "CANCELED").label}
                    </div>
                </div>


                <h2 className="text-lg font-bold text-black mb-1 uppercase">
                    {membership.subscription?.plan} Plan
                    <p className="ml-2">
                       

                    </p>
                </h2>
                <p className="text-gray-700">
                    Vigente desde{" "}
                    <span className=" text-black font-bold">
                        {formatDate(membership.validFrom || "")}
                    </span>{" "}
                    hasta{" "}
                    <span className=" text-black font-bold">
                        {formatDate(membership.validTo || "")}
                    </span>
                </p>
            </div>

            {/* Payment Info */}
            <h2 className="text-xl font-semibold text-black mb-3">Informacion de pago</h2>
            <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200 space-y-4">
                <div className="text-gray-700 flex flex-col">
                    <span className="font-bold">Próximo pago</span>
                    <span>{formatDate(membership.validTo || "")}</span>

                    <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-500" />
                        {/* si guardas tarjeta */}
                        <span className="text-gray-600">**** **** **** 1234</span>
                    </div>
                </div>
                <Link
                    href="/dashboard/payment-method"
                    className="flex p-2 text-black hover:bg-gray-100 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Gestionar método de pago
                </Link>
                <Link
                    href="/payments"
                    className="flex p-2 text-black hover:bg-gray-100 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Ver historial de pagos
                </Link>
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
