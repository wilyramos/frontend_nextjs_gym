import Link from "next/link"
import Image from "next/image"

export default function GymHome() {
    return (
        <section className="relative min-h-screen grid md:grid-cols-4 items-center px-6 md:px-10 overflow-hidden">
            {/* Columna izquierda con texto e imagen de fondo */}
            <div className="relative col-span-3 flex flex-col justify-center items-center text-center z-10">
                {/* Imagen de fondo */}
                <Image
                    src="/fitnessman.svg"
                    alt="Fitness background"
                    className="absolute -inset-15 mx-auto w-full max-w-3xl h-96"
                    width={400}
                    height={400}
                    priority
                />

                {/* Contenido en primer plano */}
                <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 relative z-20">
                    Transforma tu cuerpo, <br /> Eleva tu mente
                </h1>
            </div>

            {/* Columna derecha con texto y CTA */}
            <div className="relative z-10 flex flex-col justify-center text-center md:text-left">
                <p className="text-base md:text-lg text-gray-700 mb-6">
                    Únete a nuestra comunidad y alcanza tus objetivos de fitness con
                    planes personalizados y seguimiento experto.
                </p>

                <Link
                    href="/checkout/choose"
                    className="inline-block border border-red-700 font-medium hover:bg-red-600 hover:text-white py-3 px-10 rounded-xl shadow transition-colors"
                >
                    Inscribirme
                </Link>
            </div>
        </section>
    )
}
