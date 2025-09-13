import Link from "next/link";
import type { MembershipArray } from "@/src/types";
import { getDaysRemaining } from "@/lib/helpers";

type Props = {
    memberships?: MembershipArray;
};

export default function MemberDetails({ memberships }: Props) {
    const membership = memberships?.[0];

    if (!membership || !membership.validFrom || !membership.validTo) {
        return (
            <div className="bg-white border rounded-xl p-4 shadow-sm text-gray-500">
                No tienes membresía activa
            </div>
        );
    }

    const membershipStatus = membership.subscription?.status === "ACTIVE" ? "Activa" : "Inactiva";
    const membershipStatusColor = membership.subscription?.status === "ACTIVE" ? "text-green-600" : "text-red-600";
    const daysRemaining = getDaysRemaining(membership.validTo);

    return (
        <div className="bg-white border rounded-xl p-4 shadow-sm">
            {/* Encabezado */}
            <div className="flex justify-between gap-2">
                <h2 className="px-2 py-1 text-sm font-medium text-white rounded-r-3xl bg-gradient-to-bl from-rose-600 to-red-500">
                    Miembro desde {new Date(membership.validFrom).toLocaleDateString()}
                </h2>

                <div className="text-sm font-medium text-gray-700 text-right">
                    Estado: <span className={membershipStatusColor}>{membershipStatus}</span>
                </div>

                <div className="text-sm font-medium text-gray-700">
                    {daysRemaining > 0 ? (
                        <span>
                            {daysRemaining} <span className="text-gray-500 text-xs">días restantes</span>
                        </span>
                    ) : (
                        <span className="text-red-600">Membresía expirada</span>
                    )}
                </div>
            </div>

            {/* Detalles de la membresía */}
            <div className="mt-4 text-sm text-gray-700">
                <p className="font-bold">
                    {membership.subscription?.plan} <span className="uppercase">Plan:</span>
                </p>
                <p>Válido hasta: {new Date(membership.validTo).toLocaleDateString()}</p>
            </div>

            {/* Link de gestión */}
            <div className="mt-4">
                <Link
                    href="/memberships"
                    className="text-sm font-medium text-gray-700 py-2 hover:bg-gray-100 hover:text-black transition w-full mx-auto block text-start px-2"
                >
                    Gestionar membresía
                </Link>
            </div>
        </div>
    );
}
