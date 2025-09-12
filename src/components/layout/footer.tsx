"use client";

import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Logo from "../common/Logo";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-200 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo y descripción */}
                <div className="flex flex-col gap-4">
                    <Logo className="text-white"/>
                    <p>Tu gimnasio de confianza con los mejores beneficios, entrenadores certificados y un ambiente cómodo.</p>
                    <div className="flex gap-3 mt-2">
                        <FiFacebook size={20} className="hover:text-amber-400 cursor-pointer" />
                        <FiInstagram size={20} className="hover:text-amber-400 cursor-pointer" />
                        <FiTwitter size={20} className="hover:text-amber-400 cursor-pointer" />
                    </div>
                </div>

                {/* Enlaces */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Enlaces </h3>
                    <ul className="flex flex-col gap-2">
                        <li className="hover:text-amber-400 cursor-pointer">Inicio</li>
                        <li className="hover:text-amber-400 cursor-pointer">Planes</li>
                        <li className="hover:text-amber-400 cursor-pointer">Beneficios</li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contacto</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center gap-2"><FiMapPin /> Av. 2 de mayo 123, Cañete</li>
                        <li className="flex items-center gap-2"><FiPhone /> +51 987 654 321</li>
                        <li className="flex items-center gap-2"><FiMail /> info@gogym.com</li>
                    </ul>
                </div>

                {/* Horarios */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Horarios</h3>
                    <ul className="flex flex-col gap-2">
                        <li>Lunes - Viernes: 5:00 AM - 10:00 PM</li>
                        <li>Sábado: 6:00 AM - 8:00 PM</li>
                        <li>Domingo: 8:00 AM - 6:00 PM</li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} GymFit. Todos los derechos reservados. <span className="text-gray-400">Developed by Wily Ramos.</span>
            </div>
        </footer>
    );
}
