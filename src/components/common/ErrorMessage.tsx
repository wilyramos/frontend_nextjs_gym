import { AlertCircle } from "lucide-react";

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    if (!children) return null;

    return (
        <div className="flex items-center gap-2 p-2 text-sm text-red-600 animate-fadeIn">
            <AlertCircle className="h-4 w-4 flex-shrink-0 text-red-500" />
            <span className="font-medium">{children}</span>
        </div>
    );
}
