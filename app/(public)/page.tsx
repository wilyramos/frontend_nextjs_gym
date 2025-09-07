import BackgroundHome from "@/src/components/home/BackgroundHome";
import GymBenefitsCarousel from "@/src/components/home/GymBenefitsCarousel";
import ListPricing from "@/src/components/home/ListPricing";
import Footer from "@/src/components/layout/footer";
import Link from "next/link";
import { FiUsers, FiTrendingUp, FiActivity } from "react-icons/fi";

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="min-h-screen bg-amber-300 flex flex-col justify-center items-center text-center px-4">
                <div className="text-center max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                        Transforma tu cuerpo, <br /> Eleva tu mente
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        Únete a nuestra comunidad y alcanza tus objetivos de fitness con
                        planes personalizados y seguimiento experto.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/auth/login"
                            className="px-6 py-3 rounded-xl bg-black text-white font-medium shadow-md hover:bg-gray-900 transition"
                        >
                            Comenzar
                        </Link>
                        <Link
                            href="/pricing"
                            className="px-6 py-3 rounded-xl border border-gray-400 text-black font-medium hover:bg-gray-100 transition"
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
                <p className="text-gray-700">
                    Te ofrecemos planes flexibles y asequibles para que puedas elegir
                </p>
                <ListPricing />
            </section>

            <section>
                <GymBenefitsCarousel />
            </section>

            {/* Sección minimalista */}
            <section className="py-6 bg-amber-300">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-black mb-12">
                        Lo que encontrarás en nuestro gym
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <FiUsers className="text-4xl text-black mb-3" />
                            <p className="text-gray-700">Comunidad motivadora</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FiTrendingUp className="text-4xl text-black mb-3" />
                            <p className="text-gray-700">Planes efectivos</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FiActivity className="text-4xl text-black mb-3" />
                            <p className="text-gray-700">Entrenamiento dinámico</p>
                        </div>
                    </div>
                </div>
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
