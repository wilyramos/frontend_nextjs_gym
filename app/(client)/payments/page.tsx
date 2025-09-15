import { formatDate } from "@/lib/helpers";
import { getPaymentsData } from "@/src/services/payments";

// Helpers para badges de estado
function getStatusBadge(status: string) {
    switch (status) {
        case "APPROVED":
            return "bg-yellow-400 text-black dark:text-black"; // mantiene contraste
        case "PENDING":
            return "bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200";
        case "FAILED":
            return "bg-red-600 text-white dark:bg-red-700";
        case "REFUNDED":
            return "bg-gray-400 text-white dark:bg-gray-600";
        default:
            return "bg-gray-200 text-black dark:bg-gray-700 dark:text-gray-200";
    }
}

export default async function PaymentsPage() {
    const payments = await getPaymentsData();

    return (
        <div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
                Payments
            </h1>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
                Historial de tus pagos
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow">
                <table className="w-full text-left">
                    <thead className="">
                        <tr>
                            <th className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                                Fecha pago
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                                Método
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                                Descripción
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                                Monto
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                        {payments.map((p) => (
                            <tr
                                key={p.id}
                                className="transition hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                {/* Fecha pago */}
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                    {formatDate(p.paymentDate.toISOString())}
                                </td>

                                {/* Método */}
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                    {p.method}
                                </td>

                                {/* Descripción */}
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                    <div className="space-y-1">
                                        <p className="font-medium text-gray-900 dark:text-gray-100">
                                            Plan: {p.subscription?.plan ?? "—"}
                                        </p>

                                        <span
                                            className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${getStatusBadge(
                                                p.status
                                            )}`}
                                        >
                                            {p.status}
                                        </span>

                                        <p className="text-xs text-gray-500 dark:text-gray-400">
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

                                        <p className="text-xs text-gray-400 dark:text-gray-500">
                                            Ref: {p.externalId ?? "—"} | {p.gateway}
                                        </p>
                                    </div>
                                </td>

                                {/* Monto */}
                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
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
