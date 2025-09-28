import Pagination from "@/src/components/common/Pagination";
import MembersTable from "@/src/components/tables/MembersTable";
import { getUsersWithLastMembership } from "@/src/services/clients";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import { Button } from "@/components/ui/button";

type SearchParams = Promise<{
    query?: string;
    page?: string;   // vienen como string desde la URL
    limit?: string;
}>;

export default async function ClientesPage({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const { query = "", page = "1", limit = "10" } = await searchParams;

    // const users = await getUsers({
    //     page,
    //     limit,
    //     search: query,
    // });

    const users = await getUsersWithLastMembership({
        page,
        limit,
        search: query,
    });


    return (
        <AdminPageWrapper
            title="Gestión de Miembros"
            actionButton={
                <Button
                    

                    
                >
                    Agregar Miembro
                </Button>
            }
        >
            {/* Tabla de miembros */}
            <MembersTable data={users} />

            {/* Paginación */}
            <Pagination
                currentPage={Number(page)}
                totalPages={users?.totalPages || 1}
                pathname="/admin/members"
            />
        </AdminPageWrapper>
    );
}