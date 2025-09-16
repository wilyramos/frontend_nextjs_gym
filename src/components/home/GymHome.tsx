import Image from "next/image"
import Link from "next/link"

export default function GymHome() {
    return (
        <section className="md:min-h-screen grid md:grid-cols-2 items-center relative">
            {/* Imagen */}

            {/* Contenido */}
            <div className="p-8 flex flex-col justify-center z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Transforma tu cuerpo, <br /> Eleva tu mente
                </h1>

                <p className="text-base md:text-lg mb-8">
                    Únete a nuestra comunidad y alcanza tus objetivos de fitness con
                    planes personalizados y seguimiento experto.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <Link
                        href="/auth/register"
                        className="px-4 py-2 rounded-2xl bg-red-700 text-white font-medium hover:bg-red-600 transition"
                    >
                        Comenzar
                    </Link>
                    <Link
                        href="/pricing"
                        className="px-4 py-2 rounded-xl border border-red-700 font-medium hover:bg-red-600 hover:text-black transition"
                    >
                        Más información
                    </Link>
                </div>
            </div>

            <div className="flex justify-center items-center md:p-4  ">
                <Image
                    src="/bg.webp"
                    alt="Fitness background"
                    className="w-full max-w-sm h-auto object-contain"
                    width={400}
                    height={400}
                    priority
                />
            </div>

        </section>
    )
}
