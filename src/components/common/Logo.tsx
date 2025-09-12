type LogoProps = {
    className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
    return (
        <div className={`flex items-center text-black space-x-2 ${className} `}>
            {/* Texto moderno */}
            <span className="text-2xl font-extrabold  tracking-tight">
                <span className="">Go</span>GYM
            </span>
        </div>
    );
}
