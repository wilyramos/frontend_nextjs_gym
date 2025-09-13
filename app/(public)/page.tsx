import BackgroundHome from "@/src/components/home/BackgroundHome";
import GymBenefitsCarousel from "@/src/components/home/GymBenefitsCarousel";
import ListPricing from "@/src/components/home/ListPricing";
import Footer from "@/src/components/layout/footer";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* Hero */}

         

            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
                <div
                    className="absolute inset-0 bg-cover  bg-fixed"
                    style={{
                        backgroundImage: "url('/bg.jpg')",
                    }}
                />
                <div className="absolute inset-0 bg-black/80" />

                <div className="relative text-center max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Transforma tu cuerpo, <br /> Eleva tu mente
                    </h1>

                    <p className="text-lg text-gray-200 mb-8">
                        Únete a nuestra comunidad y alcanza tus objetivos de fitness con
                        planes personalizados y seguimiento experto.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/auth/register"
                            className="px-3 py-2 rounded-2xl bg-amber-300 text-black font-medium hover:bg-amber-400 transitionTe ofrecemos planes flexibles y asequibles para que puedas elegir"
                        >
                            Comenzar
                        </Link>
                        <Link
                            href="/pricing"
                            className="px-3 py-2 rounded-xl border border-amber-300 text-amber-300 font-medium hover:bg-amber-300 hover:text-black transition"
                        >
                            Más información
                        </Link>
                    </div>
                </div>
            </section>

            {/* Precios */}
            <section className="flex flex-col justify-center items-center text-center px-4 py-10">
                <h2 className="text-4xl font-bold text-center text-black ">
                    Membresias
                </h2>
               
                <ListPricing />
            </section>

            <section>
                <GymBenefitsCarousel />
            </section>

            <section >
                <BackgroundHome />
            </section>

            <section>
                <Footer />
            </section>
        </main>
    );
}
