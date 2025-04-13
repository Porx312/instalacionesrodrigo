"use client";
import { useState } from "react";
import { Clock, TrendingUp, Home, Palette } from "lucide-react";

interface Ventaja {
  icon: React.ElementType;
  title: string;
  description: string;
}
const ventajas: Ventaja[] = [
  {
    icon: Clock,
    title: "Renovación Rápida y Accesible",
    description:
      "Transforma tu espacio en tiempo récord y con una inversión que se adapta a tu presupuesto. Nuestro enfoque eficiente asegura que disfrutes de tu reforma sin complicaciones.",
  },
  {
    icon: TrendingUp,
    title: "Mejora el Valor de tu Hogar",
    description:
      "Cada reforma que hacemos no solo embellece tu espacio, sino que aumenta su valor. Invertir en calidad hoy garantiza un hogar más atractivo y rentable mañana.",
  },
  {
    icon: Home,
    title: "Espacios que Inspiran Bienestar",
    description:
      "Tu hogar merece ser un reflejo de confort y estilo. Creamos ambientes cálidos y funcionales donde cada detalle está diseñado para hacerte sentir en casa.",
  },
  {
    icon: Palette,
    title: "Diseños Exclusivos y Personalizados",
    description:
      "Nos apasiona convertir tus ideas en realidad. Cada reforma es única, adaptada a tus gustos y necesidades para que cada rincón sea una extensión de tu personalidad.",
  },
];

export default function VentajasSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Ventajas de Reformar con Nosotros
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ventajas.map((ventaja, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <div className={`mb-4 text-4xl text-black 'text-yellow-500`}>
                <ventaja.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {ventaja.title}
              </h3>
              <p className="text-gray-600 transition-all duration-300 ease-in-out ">
                {ventaja.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
