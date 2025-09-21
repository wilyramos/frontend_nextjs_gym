"use client";

import { FaDumbbell, FaUsers, FaHeartbeat, FaGift } from "react-icons/fa";

export default function GymBenefitsCards() {
    const benefits = [


        {
            title: "Entrenadores Expertos",
            desc: "Clases guiadas por profesionales certificados para todos los niveles.",
            icon: <FaUsers className="text-5xl text-indigo-600 mb-4" />,
            bg: "bg-gray-50",
        },
        {
            title: "Membresías y Recompensas",
            desc: "Gana puntos por referidos y obtén descuentos en tu mensualidad.",
            icon: <FaGift className="text-5xl text-yellow-500 mb-4" />,
            bg: "bg-gradient-to-br from-green-400 to-emerald-600 text-white",
        },
        {
            title: "Equipos de Primera",
            desc: "Máquinas y pesas de última generación para tu mejor rendimiento.",
            icon: <FaDumbbell className="text-5xl text-gray-100 mb-4" />,
            bg: "bg-gradient-to-br from-purple-500 to-indigo-500 text-white",
        },
        {
            title: "Salud & Bienestar",
            desc: "Programas de nutrición y bienestar para complementar tu entrenamiento.",
            icon: <FaHeartbeat className="text-5xl text-red-600 mb-4" />,
            bg: "bg-gray-50",
        },

    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen p-6">
            {benefits.map((b) => (
                <div
                    key={b.title}
                    className={`flex flex-col items-center justify-center p-8 shadow-md ${b.bg}`}
                >
                    {b.icon}
                    <h3 className="mt-2 text-xl font-bold text-center">{b.title}</h3>
                    <p className="mt-2 text-center text-sm max-w-xs">{b.desc}</p>
                </div>
            ))}
        </div>
    );
}