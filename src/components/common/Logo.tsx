type LogoProps = {
    className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
    return (
        <div className={`flex items-center ${className}`}>
            <span className="font-bold bg-gray-200 p-1 text-xl text-gray-900">
                <span className="text-red-600">Go</span>GYM
            </span>
        </div>
    );
}
