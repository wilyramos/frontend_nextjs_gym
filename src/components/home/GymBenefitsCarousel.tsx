"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiCoffee, FiHeart, FiClock, FiHome, FiUsers, FiWifi, FiActivity, FiStar, FiCheckCircle } from "react-icons/fi";

const benefits = [
    { icon: <FiCoffee size={40} />, text: "Restaurante fino", description: "Disfruta de comidas gourmet y saludables." },
    { icon: <FiHeart size={40} />, text: "Comidas fit", description: "Opciones balanceadas para cuidar tu salud." },
    { icon: <FiClock size={40} />, text: "Atención lunes a domingo", description: "Siempre disponibles para ti." },
    { icon: <FiHome size={40} />, text: "Ambiente cómodo", description: "Relájate mientras entrenas." },
    { icon: <FiUsers size={40} />, text: "Entrenadores certificados", description: "Profesionales que te guían correctamente." },
    { icon: <FiActivity size={40} />, text: "Clases grupales variadas", description: "Yoga, pilates, spinning y más." },
    { icon: <FiWifi size={40} />, text: "Wi-Fi gratuito", description: "Conéctate mientras entrenas o descansas." },
    { icon: <FiStar size={40} />, text: "Zona de spa y relajación", description: "Recupera energía con masajes y sauna." },
    { icon: <FiCheckCircle size={40} />, text: "Equipos modernos y renovados", description: "Máquinas de última generación." },
];

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 1 },
    desktop: { breakpoint: { max: 1536, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

export default function GymBenefitsCarousel() {
    return (
        <div className="w-full max-w-4xl mx-auto py-10 ">
            <h2 className="text-xl font-bold mb-8 text-center text-gray-600">Beneficios de nuestro gimnasio</h2>

            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                arrows={true}
                // showDots={true}
                containerClass="carousel-container"
                itemClass="p-2"
                partialVisible={true} // para que se vean los de los lados
            >
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-3  p-8 h-80 text-center transition-transform duration-300 hover:scale-105"
                    >
                        <div className="text-red-700">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold">{benefit.text}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
