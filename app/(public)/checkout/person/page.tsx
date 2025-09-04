"use client";


export default function PersonPage() {


    

    return (
        <div className="max-w-xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Información Personal
            </h1>

            <form className="flex flex-col gap-6 bg-white p-8 rounded-lg">
                {/* Nombre */}
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-semibold">Nombre completo</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ingresa tu nombre"
                        className="p-3 rounded-md border border-gray-300"
                    />
                </div>

                {/* Correo */}
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-semibold">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="correo@ejemplo.com"
                        className="p-3 rounded-md border border-gray-300"
                    />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-semibold">Teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Ej: +51 999 999 999"
                        className="p-3 rounded-md border border-gray-300"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 text-gray-700 font-semibold">DNI / Documento</label>
                    <input
                        type="text"
                        name="dni"
                        placeholder="Ingresa tu DNI o documento"
                        className="p-3 rounded-md border border-gray-300"
                    />
                </div>

                {/* Botón */}
                <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-black text-white font-bold rounded-md hover:bg-gray-800"
                >
                    Continuar
                </button>
            </form>
        </div>
    );
}
