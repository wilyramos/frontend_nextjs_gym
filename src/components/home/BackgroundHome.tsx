"use client";

import React from "react";

export default function BackgroundHome() {
    return (
        <div className="relative w-full h-screen">
            {/* Imagen de fondo fija */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('/IMG_8728.JPEG')",
                }}
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/80" />

            {/* Contenido centrado */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
                    Bienvenido a GoGYM
                </h1>
                <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    Entrena con los mejores beneficios, entrenadores certificados y un ambiente cómodo.
                </p>
                {/* <button className="bg-amber-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-amber-500 transition-colors">
                    ¡Inscríbete ahora!
                </button> */}
            </div>
        </div>
    );
}
