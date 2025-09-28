
interface AdminPageWrapperProps {
    title: string;
    actionButton?: React.ReactNode;
    children: React.ReactNode;
}

export default function AdminPageWrapper({
    title,
    actionButton,
    children,
}: AdminPageWrapperProps) {
    return (
        <main className="space-y-6">
            {/* Encabezado con título y botón opcional */}
            <div className="flex items-center justify-between border-b pb-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                {actionButton && <div>{actionButton}</div>}
            </div>

            {/* Contenido específico de la página */}
            <section>{children}</section>
        </main>
    );
}
