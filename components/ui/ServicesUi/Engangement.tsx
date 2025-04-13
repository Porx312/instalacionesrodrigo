"use client";
import { useState } from "react";
import { Star, Check, Phone, Calendar } from "lucide-react";
import FormularioAlerta from "../FormularioAlerta";

interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "María García",
    comment: "¡Increíble transformación! Mi casa parece nueva.",
    rating: 5,
  },
  {
    name: "Juan Pérez",
    comment: "Profesionales y puntuales. Muy satisfecho con el resultado.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    comment: "Excelente asesoramiento y acabado impecable.",
    rating: 5,
  },
];
interface Props {
  name: string;
}
export default function EngagementSection({ name }: Props) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              ¿Por Qué Elegir Reformas Ya Barcelona?
            </h2>
            <p className="text-xl mb-8">
              Porque entendemos lo que quieres, y lo hacemos realidad.
            </p>
            <ul className="space-y-4">
              {[
                "Más de 15 años de experiencia que respaldan nuestro compromiso y excelencia",
                "Resultados de calidad garantizada, diseñados para superar tus expectativas",
                "Asesoramiento personalizado para hacer realidad tus ideas y proyectos únicos",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="flex-shrink-0 h-6 w-6 text-yellow-500" />
                  <span className="">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">
                Lo que dicen nuestros clientes
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonials[activeTestimonial].rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonials[activeTestimonial].comment}"
                </p>
                <p className="text-gray-800 font-semibold">
                  {testimonials[activeTestimonial].name}
                </p>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${index === activeTestimonial ? "bg-yellow-500" : "bg-gray-300"}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Ver testimonio ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-yellow-500 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-white">
                ¡Hazlo Realidad Hoy!
              </h2>
              <p className="text-white mb-6">
                Tu hogar está a solo un paso de brillar con un nuevo color. ¿Por
                qué esperar más?
              </p>
              <div className="space-y-4 text-white">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6" />
                  <p>
                    ¿Tienes dudas? ¡Llámanos al 123-456-789 o mándanos un
                    WhatsApp!
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6" />
                  <p>
                    ¿Prefieres hacerlo online? ¡Agenda tu consulta gratuita
                    aquí!
                  </p>
                </div>
              </div>
              <FormularioAlerta
                reforma={name}
                text="Pide Tu Presupuesto gratis"
                className="mt-6 bg-white text-yellow-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300"
              ></FormularioAlerta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
