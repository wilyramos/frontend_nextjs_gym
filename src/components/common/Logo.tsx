import Image from "next/image";


type LogoProps = {
    className?: string;
    size?: number;
};

export default function Logo({ className = "", size = 24 }: LogoProps) {
    return (
        <div className={`flex items-center ${className} ${size === 32 ? "gap-2" : "gap-1"}`}>
            <Image
                src="/logo.svg"
                alt="Gym Logo"
                width={50}
                height={50}

                priority
                className="rounded"

            />
        </div>
    );
}
