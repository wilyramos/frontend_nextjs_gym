
import ListPricing from "@/src/components/home/ListPricing";
import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <section className="min-h-screen bg-amber-300 flex flex-col justify-center items-center text-white text-center px-4">
                <div className="text-center max-w-2xl">
                {/* Hero Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                    Transform Your Body, <br /> Elevate Your Mind
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    A modern gym designed to help you push limits, stay consistent,
                    and achieve your fitness goals.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 justify-center">
                    <Link
                        href="/auth/login"
                        className="px-6 py-3 rounded-xl bg-black text-white font-medium shadow-md hover:bg-gray-900 transition"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/pricing"
                        className="px-6 py-3 rounded-xl border border-gray-400 text-black font-medium hover:bg-gray-100 transition">
                        Learn More
                    </Link>

                </div>
            </div>
            </section>

            <section>
                <ListPricing />
            </section>
        </main>
    );
}