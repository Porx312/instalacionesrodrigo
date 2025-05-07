"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};
const faqData: FAQItem[] = [
  {
    question: "¿Qué servicios de instalación ofrecen en luz, agua, gas y calefacción?",
    answer:
      "Ofrecemos instalaciones completas y certificadas de sistemas eléctricos, fontanería, gas natural y calefacción en viviendas, oficinas y locales comerciales. Trabajamos con materiales homologados y cumplimos con todas las normativas vigentes en Barcelona.",
  },
  {
    question: "¿Necesito algún permiso para hacer una instalación de gas o electricidad en Barcelona?",
    answer:
      "Sí, algunas instalaciones requieren permisos municipales o certificados oficiales. Nos encargamos de toda la gestión de licencias, boletines y certificados necesarios ante los organismos correspondientes.",
  },
  {
    question: "¿Qué tiempo tarda una instalación completa de luz, agua o gas?",
    answer:
      "Depende del tipo de instalación y las dimensiones del inmueble. Por lo general, una instalación básica puede completarse entre 1 y 5 días. Instalaciones más complejas pueden requerir más tiempo, especialmente si incluyen reformas adicionales.",
  },
  {
    question: "¿Ofrecen mantenimiento o reparación de instalaciones existentes?",
    answer:
      "Sí, brindamos servicios de mantenimiento preventivo y correctivo para instalaciones de luz, agua, gas y calefacción. Respondemos ante averías, fugas o fallos en el sistema de forma rápida y eficiente.",
  },
  {
    question: "¿Cumplen con la normativa vigente en instalaciones en Barcelona?",
    answer:
      "Por supuesto. Todos nuestros trabajos cumplen con la normativa autonómica y nacional, incluyendo el Reglamento Electrotécnico para Baja Tensión (REBT), el Reglamento de Instalaciones Térmicas en los Edificios (RITE) y la normativa de gas de la Generalitat de Catalunya.",
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
