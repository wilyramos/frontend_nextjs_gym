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
            <div className="border rounded-xl p-4 shadow-sm text-muted-foreground bg-card">
                No tienes membresía activa
            </div>
        );
    }

    const membershipStatus =
        membership.subscription?.status === "ACTIVE" ? "Activa" : "Inactiva";

    const membershipStatusColor =
        membership.subscription?.status === "ACTIVE"
            ? "text-green-600 dark:text-green-400"
            : "text-red-600 dark:text-red-400";

    const daysRemaining = getDaysRemaining(membership.validTo);

    return (
        <div className="border rounded-xl p-4 shadow-sm bg-card text-card-foreground">
            {/* Encabezado */}
            <div className="flex flex-wrap justify-between gap-2">
                <h2 className="px-2 py-1 text-sm font-medium rounded-r-3xl bg-gradient-to-bl from-rose-600 to-red-500 text-white">
                    Miembro desde {new Date(membership.validFrom).toLocaleDateString()}
                </h2>

                <div className="text-sm font-medium">
                    Estado: <span className={membershipStatusColor}>{membershipStatus}</span>
                </div>

                <div className="text-sm font-medium">
                    {daysRemaining > 0 ? (
                        <span>
                            {daysRemaining}{" "}
                            <span className="text-muted-foreground text-xs">
                                días restantes
                            </span>
                        </span>
                    ) : (
                        <span className="text-red-600 dark:text-red-400">
                            Membresía expirada
                        </span>
                    )}
                </div>
            </div>

            {/* Detalles de la membresía */}
            <div className="mt-4 text-sm">
                <p className="font-bold">
                    {membership.subscription?.plan}{" "}
                    <span className="uppercase">Plan:</span>
                </p>
                <p>
                    Válido hasta: {new Date(membership.validTo).toLocaleDateString()}
                </p>
            </div>

            {/* Link de gestión */}
            <div className="mt-4">
                <Link
                    href="/memberships"
                    className="block w-full px-2 py-2 text-sm font-medium rounded-md transition hover:bg-accent hover:text-accent-foreground"
                >
                    Gestionar membresía
                </Link>
            </div>
        </div>
    );
}
