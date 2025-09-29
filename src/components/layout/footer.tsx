"use client";

import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiMail,
    FiPhone,
    FiMapPin,
} from "react-icons/fi";
import Logo from "../common/Logo";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground py-12 border-t text-xs">
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo y descripción */}
                <div className="flex flex-col gap-4">
                    <Logo className="text-foreground" />
                    <p className="text-muted-foreground">
                        Tu gimnasio de confianza con los mejores beneficios, entrenadores
                        certificados y un ambiente cómodo.
                    </p>
                    <div className="flex gap-3 mt-2">
                        <FiFacebook
                            size={20}
                            className="cursor-pointer text-muted-foreground hover:text-primary"
                        />
                        <FiInstagram
                            size={20}
                            className="cursor-pointer text-muted-foreground hover:text-primary"
                        />
                        <FiTwitter
                            size={20}
                            className="cursor-pointer text-muted-foreground hover:text-primary"
                        />
                    </div>
                </div>


                {/* Contacto */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contacto</h3>
                    <ul className="flex flex-col gap-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                            <FiMapPin /> Av. 2 de mayo 123, Cañete
                        </li>
                        <li className="flex items-center gap-2">
                            <FiPhone /> +51 987 654 321
                        </li>
                        <li className="flex items-center gap-2">
                            <FiMail /> info@gogym.com
                        </li>
                    </ul>
                </div>

                {/* Horarios */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Horarios</h3>
                    <ul className="flex flex-col gap-2 text-muted-foreground">
                        <li>Lunes - Viernes: 5:00 AM - 10:00 PM</li>
                        <li>Sábado: 6:00 AM - 8:00 PM</li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 pt-6 text-center text-xs text-muted-foreground border-t ">
                &copy; {new Date().getFullYear()} GymFit. Todos los derechos reservados.{" "}
                <span className="text-foreground">By Wily Ramos.</span>
            </div>
        </footer>
    );
}
