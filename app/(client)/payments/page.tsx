

// Simulación de pagos (esto luego vendrá del backend con fetch/query)
const payments = [
    {
        id: 1,
        amount: 50.0,
        currency: "USD",
        method: "CARD",
        status: "APPROVED",
        paymentDate: "2025-08-10T14:32:00Z",
        externalId: "pi_123456",
    },
    {
        id: 2,
        amount: 25.5,
        currency: "USD",
        method: "PAYPAL",
        status: "REFUNDED",
        paymentDate: "2025-07-05T09:10:00Z",
        externalId: "pp_987654",
    },
    {
        id: 3,
        amount: 40.0,
        currency: "USD",
        method: "CASH",
        status: "PENDING",
        paymentDate: "2025-06-20T19:45:00Z",
        externalId: null,
    },
];

// Helpers para badges
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

export default function PaymentsPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-black mb-2">Payments</h1>
            <p className="text-gray-500 mb-6">Historial de tus pagos</p>

            <div className="bg-white rounded-xl shadow overflow-hidden border border-gray-200">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-sm font-semibold text-black">Fecha</th>
                            <th className="px-4 py-3 text-sm font-semibold text-black">Monto</th>
                            <th className="px-4 py-3 text-sm font-semibold text-black">Método</th>
                            <th className="px-4 py-3 text-sm font-semibold text-black">Estado</th>
                            <th className="px-4 py-3 text-sm font-semibold text-black">Referencia</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {payments.map((p) => (
                            <tr key={p.id} className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3 text-gray-700">
                                    {new Date(p.paymentDate).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-3 text-gray-700 font-medium">
                                    {p.amount} {p.currency}
                                </td>
                                <td className="px-4 py-3 text-gray-700">{p.method}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusBadge(
                                            p.status
                                        )}`}
                                    >
                                        {p.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-gray-500">{p.externalId || "-"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
