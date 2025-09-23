import Link from "next/link"
import ListPricing from "./ListPricing"

export default function GymHome() {
    return (
        <section className="min-h-screen grid md:grid-cols-3 items-center px-6 md:px-10 gap-2">
            {/* Columna izquierda */}
            <div className="flex flex-col justify-center h-full gap-6">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                        Transforma tu cuerpo, <br /> Eleva tu mente
                    </h1>

                    <p className="text-base md:text-lg text-gray-700 mb-6">
                        Únete a nuestra comunidad y alcanza tus objetivos de fitness con
                        planes personalizados y seguimiento experto.
                    </p>

                    <div className="flex gap-4 flex-wrap mb-6">
                        <Link
                            href="/checkout/choose"
                            className="mt-8 inline-block border-red-700 border font-medium hover:bg-red-600 hover:text-white py-3  px-12 rounded-xl shadow transition-colors"
                        >
                            Inscribirme
                        </Link>
                    </div>
                </div>

                {/* Imagen debajo del texto */}
                <div className="flex justify-center">
                    {/* <Image
                        src="/bg.webp"
                        alt="Fitness background"
                        className="w-full max-w-xs md:max-w-sm h-auto object-contain"
                        width={150}
                        height={150}
                        priority
                    /> */}
                </div>
            </div>

            {/* Columna derecha: Pricing con fondo de imagen */}
            <div className="relative flex items-center justify-center rounded-2xl overflow-hidden col-span-2">
                {/* Contenido: ListPricing */}
                <div className="relative w-full">
                    <ListPricing />
                </div>
            </div>
        </section>
    )
}
