import Link from "next/link"
import type { MembershipArray } from "@/src/types"

type Props = {
    memberships?: MembershipArray
}

export default function MemberDetails({ memberships }: Props) {
    const membership = memberships?.[0] // primera membresía

    function getDaysRemaining(nextPayment: string) {
        const today = new Date()
        const paymentDate = new Date(nextPayment)
        const diffTime = paymentDate.getTime() - today.getTime()
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }

    function getMembershipStatus(nextPayment: string | null) {
        if (!nextPayment) return { label: "Sin membresía", color: "text-gray-500" }
        const days = getDaysRemaining(nextPayment)
        if (days < 0) return { label: "Expirado", color: "text-red-600" }
        return { label: "Activo", color: "text-green-600", days }
    }

    const statusInfo = getMembershipStatus(membership?.validTo?.toString() || null)

    return (
        <div className="rounded-xl border p-4 shadow-sm bg-white">
            <div className=" items-center gap-2 flex justify-between">
                <h2 className="text-sm bg-gradient-to-bl from-rose-600 to-red-500 rounded-r-3xl px-2 py-1 font-medium text-white">
                    Miembro desde {membership ? new Date(membership.validFrom).toLocaleDateString() : "N/A"}
                </h2>

                {statusInfo.days && (
                    <p>
                        <span className="font-medium">Días restantes:</span> {statusInfo.days}
                    </p>
                )}
            </div>

            {membership ? (
                <div className="mt-4 space-y-1 text-sm text-gray-700">
                    <p className="font-bold">
                        {membership.subscription?.plan}
                        <span className="uppercase">{" "} Plan:</span>
                    </p>

                    <p>
                        <span className="font-medium">Válido hasta:</span>{" "}
                        {new Date(membership.validTo).toLocaleDateString()}
                    </p>

                </div>


            ) : (
                <p className="mt-4 text-sm text-gray-500">No tienes membresía activa</p>
            )}

            <div className="mt-4">
                <Link
                    href="/dashboard/manage-membership"
                    className="text-sm font-medium text-blue-600 hover:underline"
                >
                    Gestionar membresía

                </Link>
            </div>
        </div>
    )
}
