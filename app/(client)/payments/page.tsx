import { formatDate } from "@/lib/helpers";
import { getPaymentsData } from "@/src/services/payments";

// Helpers para badges de estado
function getStatusBadge(status: string) {
    switch (status) {
        case "APPROVED":
            return "bg-amber-300 text-black";
        case "PENDING":
            return "bg-gray-200 text-black";
        case "FAILED":
            return "bg-black text-white";
        case "REFUNDED":
            return "bg-gray-400 text-white";
        default:
            return "bg-gray-200 text-black";
    }
}

export default async function PaymentsPage() {
    const payments = await getPaymentsData();

    return (
        <div>
            <h1 className="mb-2 text-3xl font-bold text-black">Payments</h1>
            <p className="mb-6 text-gray-500">Historial de tus pagos</p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-sm font-semibold text-black">
                                Fecha pago
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold text-black">
                                Método
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold text-black">
                                Descripción
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold text-black">
                                Monto
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-sm">
                        {payments.map((p) => (
                            <tr key={p.id} className="transition hover:bg-gray-50">
                                {/* Fecha pago */}
                                <td className="px-4 py-3 text-gray-700">
                                    {formatDate(p.paymentDate.toISOString())}
                                </td>

                                {/* Método */}
                                <td className="px-4 py-3 text-gray-700">{p.method}</td>

                                {/* Descripción completa */}
                                <td className="px-4 py-3 text-gray-700">
                                    <div className="space-y-1">
                                        {/* Plan */}
                                        <p className="font-medium">
                                            Plan: {p.subscription?.plan ?? "—"}
                                        </p>

                                        {/* Estado de pago con badge */}
                                        <span
                                            className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${getStatusBadge(
                                                p.status
                                            )}`}
                                        >
                                            {p.status}
                                        </span>

                                        {/* Rango de fechas */}
                                        <p className="text-xs text-gray-500">
                                            {p.subscription?.startDate
                                                ? `Inicio: ${new Date(
                                                    p.subscription.startDate
                                                ).toLocaleDateString()}`
                                                : "Inicio: —"}
                                            {"  |  "}
                                            {p.subscription?.endDate
                                                ? `Fin: ${new Date(
                                                    p.subscription.endDate
                                                ).toLocaleDateString()}`
                                                : "Fin: —"}
                                        </p>

                                        {/* ID de referencia / gateway */}
                                        <p className="text-xs text-gray-400">
                                            Ref: {p.externalId ?? "—"} | {p.gateway}
                                        </p>
                                    </div>
                                </td>

                                {/* Monto */}
                                <td className="px-4 py-3 font-medium text-gray-700">
                                    {p.amount} {p.currency}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}