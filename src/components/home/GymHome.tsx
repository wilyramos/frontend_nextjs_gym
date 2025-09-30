import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GymHome() {
    return (
        <section className="relative min-h-screen grid md:grid-cols-4 items-center px-6 md:px-10 overflow-hidden gap-10">
            {/* Columna izquierda con texto e imagen de fondo */}
            <div className="relative col-span-3 flex flex-col justify-center items-center text-start z-10">
                {/* Imagen de fondo */}
                

                {/* Contenido en primer plano */}
                <h1 className="text-3xl md:text-8xl font-bold leading-tight mb-4 z-0">
                    Transforma tu cuerpo, <br />
                   
                </h1>
                 <span className="text-3xl md:text-7xl font-bold z-20">transforma tu vida</span>
                <Image
                    src="/fitnessman.svg"
                    alt="Fitness background"
                    className="absolute -inset-15 mx-auto w-full max-w-3xl h-110 object-contain opacity-20 md:opacity-100"
                    width={400}
                    height={400}
                    priority
                />
            </div>

            {/* Columna derecha con texto y CTA */}
            <div className="relative z-10 flex flex-col justify-center text-center md:text-left">
                <p className="text-sm text-gray-700 mb-6 border-r-2 pr-4 border-gray-300">
                    Únete a nuestra comunidad y alcanza tus objetivos de fitness con
                    planes personalizados y seguimiento experto.
                </p>

                <Button
                    asChild
                    className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-400"
                >
                    <Link href="/signup">Comenzar</Link>
                </Button>
            </div>
        </section>
    )
}
