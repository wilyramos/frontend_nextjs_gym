import Link from "next/link"


export default function GymHome() {
    return (
        <section className="min-h-screen flex flex-col justify-between  md:flex-row items-center px-4 relative">
            {/* Imagen */}
            <div className="w-full md:w-1/3 h-64 md:h-full">
                <img
                    src="/bg.webp"
                    alt="Fitness background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-black/80" />

            {/* Contenido de texto */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left p-8 relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Transforma tu cuerpo, <br /> Eleva tu mente
                </h1>

                <p className="text-lg text-gray-200 mb-8">
                    Únete a nuestra comunidad y alcanza tus objetivos de fitness con
                    planes personalizados y seguimiento experto.
                </p>

                <div className="flex gap-4">
                    <Link
                        href="/auth/register"
                        className="px-3 py-2 rounded-2xl bg-red-700 text-white font-medium hover:bg-red-600 transition"
                    >
                        Comenzar
                    </Link>
                    <Link
                        href="/pricing"
                        className="px-3 py-2 rounded-xl border border-red-700 text-white font-medium hover:bg-red-600 hover:text-black transition"
                    >
                        Más información
                    </Link>
                </div>
            </div>
        </section>
    )
}
