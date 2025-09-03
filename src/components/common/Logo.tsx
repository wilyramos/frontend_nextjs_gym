type LogoProps = {
    className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            {/* Icono geométrico: triángulo rojo + círculo gris */}
            <div className="relative w-8 h-8">
                <div className="absolute w-4 h-4 bg-red-600 rotate-45 top-0 left-0"></div>
                <div className="absolute w-3 h-3 bg-gray-500 rounded-full bottom-0 right-0"></div>
            </div>

            {/* Texto moderno */}
            <span className="text-2xl font-extrabold text-black tracking-tight">
                <span className="text-red-600">Go</span>GYM
            </span>
        </div>
    );
}
