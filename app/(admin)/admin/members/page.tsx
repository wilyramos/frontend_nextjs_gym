import Pagination from "@/src/components/common/Pagination";
import MembersTable from "@/src/components/tables/MembersTable";
import { getUsers } from "@/src/services/clients";

type SearchParams = {
    query?: string;
    page?: string;   // vienen como string desde la URL
    limit?: string;
};

export default async function ClientesPage({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const page = Number(searchParams.page) || 1;
    const limit = Number(searchParams.limit) || 10;
    const query = searchParams.query ?? "";

    const users = await getUsers({
        page,
        limit,
        search: query,
    });

    return (
        <main>
            <h1 className="text-base font-bold mb-4">Clientes</h1>

            {/* Tabla de clientes */}
            <MembersTable data={users.data} />

            {/* Paginación */}
            <Pagination
                currentPage={page}
                totalPages={users.totalPages}
                pathname="/admin/members"
            />
        </main>
    );
}
