// File: app/(admin)/admin/members/page.tsx
import Pagination from "@/src/components/common/Pagination";
import MembersTable from "@/src/components/tables/MembersTable";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import { Button } from "@/components/ui/button";
import { getUserById, getUsersWithLastMembership } from "@/src/services/clients";
import { Card } from "@/components/ui/card";
import UserDetails from "@/src/components/admin/members/UserDetails";

type SearchParams = Promise<{
    query?: string;
    page?: string;
    limit?: string;
}>;

type Params = Promise<{
    id: string;
}>;

export default async function ClientesPage({
    searchParams,
    params
}: {
    searchParams: SearchParams;
    params: Params;
}) {
    const { query = "", page = "1", limit = "10" } = await searchParams;
    const { id } = await params;

    const users = await getUsersWithLastMembership({
        page,
        limit,
        search: query,
    });

    const userDetails = id ? await getUserById(parseInt(id)) : null;

    return (
        <AdminPageWrapper
            title="Gestión de Miembros"
            actionButton={<Button>Agregar Miembro</Button>}
            tabs={[
                { label: "Todos", href: "/admin/members" },
                { label: "Activos", href: "/admin/members/active" },
                { label: "Expirados", href: "/admin/members/expired" },
            ]}
        >
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <MembersTable data={users} />
                    <Pagination
                        currentPage={Number(page)}
                        totalPages={users?.totalPages || 1}
                        pathname="/admin/members"
                    />
                </div>

                {/* Panel derecho vacío (cuando no hay seleccionado) */}
                <div className="col-span-2 text-gray-500  border-l pl-4">
                    <div className="col-span-2 border-l pl-6">
                        {userDetails ? (
                            <UserDetails user={userDetails} />
                        ) : (
                            <p className="text-gray-500 italic">Selecciona un miembro para ver sus detalles.</p>
                        )}
                    </div>

                </div>
            </div>
        </AdminPageWrapper>
    );
}