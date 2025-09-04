


// Helpers
export function getDaysRemaining(validTo: string) {
    const today = new Date();
    const endDate = new Date(validTo);
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}