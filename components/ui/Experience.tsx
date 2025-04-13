"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import FormularioAlerta from "./FormularioAlerta";

const Experience = () => {
  const services = [
    {
      id: 1,
      title: "Instalaciones de Agua",
      image:
        "https://res.cloudinary.com/dvqgkdvgg/image/upload/t_Banner 16:9/v1743937085/IMG-20250406-WA0017_rrknwl.jpg",
      description:
        "Sistemas de agua eficientes y duraderos para tu hogar o negocio.",
    },
    {
      id: 2,
      title: "Instalaciones Eléctricas",
      image:
        "https://res.cloudinary.com/dvqgkdvgg/image/upload/t_Banner 16:9/v1744548254/Imagen_de_WhatsApp_2025-04-13_a_las_14.43.46_18a9cd8f_injw2y.jpg",
      description:
        "Soluciones eléctricas seguras y modernas que cumplen con todas las normativas.",
    },
    {
      id: 3,
      title: "Instalaciones de Gas",
      image:
        "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937087/IMG-20250406-WA0007_sq4l68.jpg",
      description:
        "Instalación y mantenimiento de sistemas de gas con los más altos estándares de seguridad.",
    },
    {
      id: 4,
      title: "Calefacción",
      image:
        "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937085/IMG-20250406-WA0018_bzonse.jpg",
      description:
        "Sistemas de calefacción eficientes y confortables para cualquier espacio.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1,
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1,
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const benefits = [
    "Profesionales certificados con años de experiencia",
    "Materiales de alta calidad y garantía en todos nuestros trabajos",
    "Servicio rápido y eficiente adaptado a tus necesidades",
    "Presupuestos sin compromiso y precios competitivos",
  ];

  return (
    <div className="flex flex-col items-center justify-between w-full relative py-12 px-4 md:px-6 lg:px-8 z-20">
      <div className="absolute inset-0 z-0 h-full">
        <Image
          src={
            "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937085/IMG-20250406-WA0018_bzonse.jpg"
          }
          alt={"Servicios de instalación profesional"}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950 opacity-85"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Qué Podemos Hacer Por Ti?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Soluciones completas para instalaciones de agua, electricidad, gas y
            calefacción con la más alta calidad y garantía.
          </p>
        </div>

        {/* Custom Carousel */}
        <div className="relative w-full overflow-hidden rounded-lg mb-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service) => (
              <div key={service.id} className="w-full flex-shrink-0">
                <div className="relative h-[300px] md:h-[400px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Navigation Buttons */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full p-2 z-10 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full p-2 z-10 transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                } transition-colors`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Custom Benefits Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg text-white p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Nuestros Servicios a Tu Disposición
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <FormularioAlerta text="Solicitar Presupuesto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
