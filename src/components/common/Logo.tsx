import Image from "next/image";


type LogoProps = {
    className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
    return (
        <div className={`flex items-center${className}`}>
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
