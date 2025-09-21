

export function getDaysRemaining(validTo: string | Date) {
    const today = new Date();
    const endDate = new Date(validTo);
    const diffTime = endDate.getTime() - today.getTime();
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Lima",
    });
}

export function formatDateOnly(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        timeZone: "America/Lima",
    });
}