"use client";

import type React from "react";

import { Building2, Users, School, HeartPulse } from "lucide-react";
import FormularioAlerta from "./FormularioAlerta";

export default function AboutSection() {
  return (
    <section className="w-full  py-12 px-4 md:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* About Us Content */}
        <div className="bg-gradient-to-br bg-white rounded-xl p-6 md:p-8 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Sobre nosotros
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              RODRIGO INSTALACIONES S.L. ofrece servicios integrales en
              instalaciones, con un firme compromiso hacia la excelencia.
              Trabajamos para satisfacer las necesidades y expectativas de
              nuestros clientes a través de la mejora continua de nuestro
              Sistema de Gestión Integral.
            </p>
            <p className="leading-relaxed">
              Contamos con un equipo de expertos y tecnología de punta,
              ocupándonos de cada detalle que tu empresa o hogar necesita para
              lograr resultados de calidad.
            </p>
            <p className="leading-relaxed">
              Te invitamos a conocer nuestras publicaciones, seguirnos en redes
              sociales y descubrir todo lo que Rodrigo Instalaciones S.L. puede
              hacer por ti.
            </p>
          </div>
          <FormularioAlerta text="Trabaja Con Nosotros" />
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ServiceCard
            icon={<Users className="w-10 h-10 text-blue-500" />}
            title="Clientes Particulares"
            items={["Particulares", "Autónomos", "Empresas"]}
          />

          <ServiceCard
            icon={<Building2 className="w-10 h-10 text-emerald-500" />}
            title="Administración"
            items={[
              "Administradores de fincas",
              "Grupos de inversores",
              "Entidades Bancarias",
            ]}
          />

          <ServiceCard
            icon={<School className="w-10 h-10 text-purple-500" />}
            title="Educación y Deporte"
            items={["Escuelas", "Colegios", "Instalaciones Deportivas"]}
          />

          <ServiceCard
            icon={<HeartPulse className="w-10 h-10 text-rose-500" />}
            title="Salud y Alojamiento"
            items={["Residencias", "Hospitales", "Edificación", "Alojamientos"]}
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function ServiceCard({ icon, title, items }: ServiceCardProps) {
  return (
    <div className={`bg-gradient-to-br  p-4 bg-white rounded-lg  shadow-md`}>
      <div className="flex items-start gap-3">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
