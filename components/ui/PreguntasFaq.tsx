"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "¿Qué servicios están incluidos en una reforma integral?",
    answer:
      "Nuestro servicio de reformas integrales cubre todo el proceso de transformación de tu espacio, desde la demolición inicial hasta la instalación de sistemas eléctricos, fontanería, revestimientos, y acabados finales como pintura, carpintería y decoración. Nos aseguramos de entregar un resultado completamente listo para usar.",
  },
  {
    question: "¿Cuánto tiempo se necesita para completar una reforma integral?",
    answer:
      "El tiempo de ejecución depende del tamaño y la complejidad del proyecto. Por lo general, una reforma integral tarda entre 6 y 12 semanas. Reformas más específicas, como baños o cocinas, pueden completarse en 2 a 4 semanas.",
  },
  {
    question: "¿Ayudan con el diseño y la planificación de la reforma?",
    answer:
      "Sí, ofrecemos asesoramiento profesional en diseño para crear espacios funcionales y estéticamente atractivos. Te ayudamos a elegir materiales, distribución de espacios y acabados que reflejen tu estilo y se ajusten a tu presupuesto.",
  },
  {
    question: "¿Es necesario solicitar permisos para realizar una reforma?",
    answer:
      "En muchos casos, sí. Trabajos que afecten estructuras, fachadas o instalaciones mayores suelen requerir permisos municipales. No te preocupes, nos encargamos de gestionar toda la documentación y permisos necesarios para que no tengas que preocuparte por nada.",
  },
  {
    question: "¿Cómo se determina el costo de una reforma?",
    answer:
      "El costo varía según el tamaño del espacio, la calidad de los materiales y la complejidad del proyecto. Ofrecemos presupuestos claros y detallados, adaptados a tus necesidades, para que tengas una idea precisa del costo antes de comenzar.",
  },
  {
    question: "¿Qué beneficios ofrece trabajar con su empresa?",
    answer:
      "Contamos con un equipo profesional con experiencia, garantizamos calidad en cada detalle y ofrecemos un servicio integral, desde el diseño hasta la ejecución. Además, priorizamos la transparencia en los costos y los plazos de entrega.",
  },
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b w-full  border-gray-200">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{item.question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180 transform" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-base">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 ">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Resolvemos tus dudas
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} item={faq} />
        ))}
      </div>
    </section>
  );
}
