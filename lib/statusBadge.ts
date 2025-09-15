import { getDaysRemaining } from "./helpers";
import {
    FiCheckCircle,
    FiXCircle,
    FiClock,
    FiAlertTriangle,
    FiSlash,
} from "react-icons/fi";


export function getStatusBadge(status: string, validTo: string | Date) {
    const days = getDaysRemaining(validTo);

    switch (status) {
        case "ACTIVE":
            return {
                label: `Activo - ${days} días restantes`,
                className: "bg-red-700 text-black",
            };
        case "PAUSED":
            return { label: "Pausado", className: "bg-gray-200 text-black" };
        case "EXPIRED":
            return { label: "Expirado", className: "bg-black text-white" };
        default:
            return { label: "Sin membresía", className: "bg-gray-200 text-black" };
    }
}




export function getStatusBadgeLabel(
  status: "ACTIVE" | "EXPIRED" | "PENDING" | "PAST_DUE" | "CANCELED"
) {
  switch (status) {
    case "ACTIVE":
      return {
        label: "Activo",
        className:
          "bg-green-100 text-green-800 border border-green-200 shadow-xs",
        icon: FiCheckCircle,
      };

    case "PENDING":
      return {
        label: "Pendiente",
        className:
          "bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm",
        icon: FiClock,
      };

    case "PAST_DUE":
      return {
        label: "Pago atrasado",
        className:
          "bg-orange-100 text-orange-800 border border-orange-200 shadow-sm",
        icon: FiAlertTriangle,
      };

    case "EXPIRED":
      return {
        label: "Expirado",
        className:
          "bg-red-100 text-red-800 border border-red-200 shadow-sm",
        icon: FiXCircle,
      };

    case "CANCELED":
      return {
        label: "Cancelado",
        className:
          "bg-gray-200 text-gray-800 border border-gray-300 shadow-sm",
        icon: FiSlash,
      };

    default:
      return {
        label: "Desconocido",
        className:
          "bg-gray-100 text-gray-700 border border-gray-200 shadow-sm",
        icon: FiAlertTriangle,
      };
  }
}
