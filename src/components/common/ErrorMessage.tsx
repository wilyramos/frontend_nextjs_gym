


export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm text-red-500 font-medium">
            {children}
        </p>
    );
}
