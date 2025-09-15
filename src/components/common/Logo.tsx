type LogoProps = {
    className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
    return (
        <div className={`flex items-center text-white ${className} bg-red-700 p-1`}>
            {/* Texto moderno */}
            <span className="text-2xl font-extrabold  tracking-tight">
                <span className="">Go</span>GYM
            </span>
        </div>
    );
}
