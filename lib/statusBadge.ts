import { getDaysRemaining } from "./helpers";


export function getStatusBadge(status: string, validTo: string | Date) {
    const days = getDaysRemaining(validTo);

    switch (status) {
        case "ACTIVE":
            return {
                label: `Activo - ${days} días restantes`,
                className: "bg-amber-300 text-black",
            };
        case "PAUSED":
            return { label: "Pausado", className: "bg-gray-200 text-black" };
        case "EXPIRED":
            return { label: "Expirado", className: "bg-black text-white" };
        default:
            return { label: "Sin membresía", className: "bg-gray-200 text-black" };
    }
}