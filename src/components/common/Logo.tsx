type LogoProps = {
    className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
           

            {/* Texto moderno */}
            <span className="text-2xl font-extrabold text-black tracking-tight">
                <span className="">Go</span>GYM
            </span>
        </div>
    );
}
