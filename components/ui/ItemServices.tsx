"use client"

import { useState, useRef } from "react"
import {
  HomeIcon,
  PipetteIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BoltIcon,
  FlameIcon,
  ThermometerIcon,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: BoltIcon,
    title: "Electricidad",
    href: "electricidad",
    description: "Instalaciones y reparaciones eléctricas para hogares y negocios",
  },
  {
    icon: FlameIcon,
    title: "Gas",
    href: "gas",
    description: "Servicios profesionales de instalación y mantenimiento de gas",
  },
  {
    icon: PipetteIcon,
    title: "Fontanería",
    href: "fontaneria",
    description: "Soluciones de fontanería para todo tipo de instalaciones",
  },
  {
    icon: ThermometerIcon,
    title: "Climatización",
    href: "climatizacion",
    description: "Instalación y mantenimiento de sistemas de aire acondicionado",
  },
  {
    icon: FlameIcon,
    title: "Calefacción",
    href: "calefaccion",
    description: "Sistemas de calefacción eficientes para tu hogar o negocio",
  },
  {
    icon: HomeIcon,
    title: "Reformas Integrales",
    href: "reformas-integrales",
    description: "Transformación completa de espacios residenciales y comerciales",
  },
  /*  {
    icon: WindIcon,
    title: "Aerotermia",
    href: "aerotermia",
    description: "Sistemas de aerotermia para climatización eficiente y sostenible",
  },
  {
    icon: SunIcon,
    title: "Energía Renovable",
    href: "energia-renovable",
    description: "Instalación de sistemas de energía solar y otras renovables",
  },
  {
    icon: Paintbrush2Icon,
    title: "Pintura Interior/Exterior",
    href: "pintura",
    description: "Servicios profesionales de pintura para interiores y exteriores",
  },
  {
    icon: KeyIcon,
    title: "Urgencias 24h Cerrajería",
    href: "cerrajeria",
    description: "Servicio de cerrajería disponible las 24 horas del día",
  },
  {
    icon: WrenchIcon,
    title: "Reparaciones de Averías",
    href: "reparaciones",
    description: "Reparaciones rápidas y eficientes de todo tipo de averías",
  },
  {
    icon: DropletIcon,
    title: "Desatascos",
    href: "desatascos",
    description: "Solución profesional para desatascos en tuberías y desagües",
  },
  {
    icon: LayersIcon,
    title: "Aislamiento Térmico",
    href: "aislamiento",
    description: "Mejora la eficiencia energética con nuestros sistemas de aislamiento",
  }, */
]

const ItemServices = () => {
  const [visibleCount, setVisibleCount] = useState(6)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleVisibility = () => {
    if (visibleCount === 6) {
      setVisibleCount(services.length)
    } else {
      setVisibleCount(6)
      if (containerRef.current) {
        containerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            ¿Te Interesa un <span className="text-yellow-500">servicio en específico</span>?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Selecciona uno de nuestros servicios profesionales y solicita un
            <span className="font-semibold text-yellow-500"> presupuesto gratis</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.slice(0, visibleCount).map((service, index) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="service-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <Link href={`/servicios/${service.href}`}>
                  <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="p-6 flex flex-col h-full">
                      <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
                      <div className="flex items-center text-yellow-500 font-medium">
                        <span>Ver detalles</span>
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        {services.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={toggleVisibility}
              className="group bg-white border-yellow-300 hover:bg-yellow-50 text-yellow-700 px-8 py-6 rounded-xl font-medium"
            >
              {visibleCount === 6 ? (
                <>
                  Ver más servicios
                  <ChevronDownIcon className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Ver menos servicios
                  <ChevronUpIcon className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemServices
