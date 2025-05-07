import {
  CheckCircle,
  Droplet,
  Paintbrush,
  Palette,
  Home,
  Box,
  Layers,
  Lightbulb,
  Plug,
  Wrench,
  Cpu,
  Bolt,
  ShieldCheck,
  Flame,
  Thermometer,
  Snowflake,
  Ruler,
} from "lucide-react";

// Centralizamos los íconos para evitar redundancia y errores tipográficos.
const Icons = {
  CheckCircle,
  Droplet,
  Paintbrush,
  Palette,
  Home,
  Box,
  Layers,
  Lightbulb,
  Plug,
  Wrench,
  ShieldCheck,
  Cpu,
  Bolt,
  Flame,
  Thermometer,
  Snowflake,
  Ruler,
};

type FAQItem = {
  question: string;
  answer: string;
};

// Definimos la interfaz que estructura la información de los servicios de reformas.
interface ServicesReformas {
  name: string; // Nombre del servicio (e.g., "Pintura", "Cocina")
  title: string; // Título principal del servicio
  description: string; // Descripción breve del servicio
  doforyour: {
    title: string; // Título de la sección "Lo Que Hacemos por Ti"
    icons: { icon: any; text: string }[]; // Lista de íconos y textos descriptivos
  };
  href: string; // Enlace para más detalles del servicio
  img: string;
  FaqData: FAQItem[];
}

const ReformasData: ServicesReformas[] = [
  {
    name: "instalacion electrica",
    title:
      "¡Ilumina Tu Hogar y Garantiza Tu Seguridad con Instalaciones Rodrigo!",
    description:
      "¿Necesitas una instalación eléctrica moderna, segura y eficiente? ¡Confía en nuestros expertos para transformar tu espacio con soluciones eléctricas de vanguardia!",
    doforyour: {
      title: "¡Llevamos la Energía que Tu Hogar o Negocio Necesita!",
      icons: [
        {
          icon: Icons.Lightbulb,
          text: "Instalaciones Eléctricas Completas y Certificadas",
        },
        {
          icon: Icons.ShieldCheck,
          text: "Sistemas Seguros Cumpliendo Normativas Vigentes",
        },
        {
          icon: Icons.Lightbulb,
          text: "Iluminación Interior y Exterior Eficiente",
        },
        {
          icon: Icons.Cpu,
          text: "Automatización y Domótica para Mayor Comodidad",
        },
        {
          icon: Icons.Bolt,
          text: "Mantenimiento y Reparaciones Eléctricas Rápidas",
        },
      ],
    },
    href: "electricidad",
    img: "https://res.cloudinary.com/dvqgkdvgg/image/upload/t_Banner 16:9/v1743937087/IMG-20250406-WA0008_ot8iek.jpg",
    FaqData: [
      {
        question: "¿Qué tipos de instalaciones eléctricas realizan?",
        answer:
          "Realizamos todo tipo de instalaciones eléctricas: desde obras nuevas y reformas integrales hasta ampliaciones, cambios de cuadros eléctricos y cableado. También instalamos iluminación interior y exterior, sistemas de automatización y puntos de recarga para vehículos eléctricos. ¡Cuéntanos tu proyecto y te asesoramos desde el primer momento!",
      },
      {
        question:
          "¿Necesito una certificación eléctrica para mi vivienda o local?",
        answer:
          "Sí, en muchos casos es obligatorio contar con un Boletín Eléctrico o Certificado de Instalación (CIE), especialmente para nuevas altas, cambios de potencia o reformas importantes. Nosotros nos encargamos de todos los trámites para que tu instalación cumpla con la normativa vigente. ¡Déjalo en nuestras manos!",
      },
      {
        question:
          "¿Cómo saber si mi instalación eléctrica necesita ser renovada?",
        answer:
          "Si tu instalación tiene más de 20 años, presenta apagones frecuentes, enchufes deteriorados o saltan los automáticos con facilidad, es momento de renovarla. Una instalación moderna no solo mejora la seguridad, también optimiza el consumo energético. ¿Tienes dudas? ¡Solicita una revisión profesional sin compromiso!",
      },
      {
        question: "¿Qué medidas de seguridad siguen durante una instalación?",
        answer:
          "Nuestra prioridad es tu seguridad. Trabajamos siguiendo estrictamente las normativas vigentes (REBT) y utilizamos materiales homologados. Cada proyecto se ejecuta con protecciones adecuadas, pruebas de funcionamiento y verificación final. Con nosotros, tu hogar o negocio estará en las mejores manos.",
      },
      {
        question: "¿Ofrecen servicio de urgencias eléctricas en Barcelona?",
        answer:
          "¡Por supuesto! Sabemos que los problemas eléctricos no avisan. Disponemos de un servicio de atención rápida para urgencias como cortes de luz, cortocircuitos o averías graves. Actuamos con la mayor rapidez para devolverte la normalidad. ¡Guarda nuestro contacto y llámanos cuando nos necesites!",
      },
      {
        question: "¿Qué beneficios tiene modernizar la instalación eléctrica?",
        answer:
          "Modernizar tu instalación te proporciona mayor seguridad, eficiencia energética, capacidad para nuevos dispositivos y aumenta el valor de tu propiedad. Además, podrás acceder a nuevas tecnologías como la domótica y cargadores de vehículos eléctricos. ¡Actualiza tu sistema y disfruta de todas sus ventajas!",
      },
    ],
  },
  {
    name: "instalacion de Gas",
    title: "¡Lleva Confort y Seguridad a Tu Hogar con Instalaciones Rodrigo!",
    description:
      "¿Necesitas una instalación de gas segura, eficiente y certificada? ¡Confía en nuestros expertos para transformar tu hogar o negocio con soluciones de gas a medida!",
    doforyour: {
      title: "¡Llevamos el Gas que Tu Hogar o Negocio Necesita!",
      icons: [
        {
          icon: Icons.Flame,
          text: "Instalaciones de Gas Natural y Butano Certificadas",
        },
        {
          icon: Icons.ShieldCheck,
          text: "Sistemas de Gas Seguros Cumpliendo Toda la Normativa",
        },
        {
          icon: Icons.Thermometer,
          text: "Instalación de Calefacción y Calentadores de Agua",
        },
        {
          icon: Icons.Home,
          text: "Adaptaciones de Gas para Hogares y Locales Comerciales",
        },
        {
          icon: Icons.Bolt,
          text: "Reparaciones, Mantenimiento y Revisiones Periódicas",
        },
      ],
    },
    href: "gas",
    img: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937087/IMG-20250406-WA0007_sq4l68.jpg",
    FaqData: [
      {
        question: "¿Qué tipos de instalaciones de gas realizan?",
        answer:
          "Realizamos todo tipo de instalaciones de gas natural y butano: en viviendas, comunidades, locales comerciales e industrias. También nos encargamos de la instalación de calefacción, calentadores de agua, cocinas de gas y adaptaciones de sistemas. ¡Cuéntanos qué necesitas y te ayudamos a hacerlo realidad!",
      },
      {
        question:
          "¿Necesito un certificado de instalación de gas para mi vivienda o local?",
        answer:
          "Sí, es obligatorio contar con un Certificado de Instalación de Gas (CIG) en nuevas instalaciones, modificaciones importantes o al cambiar de suministradora. Nosotros nos ocupamos de realizar la instalación conforme a normativa y gestionar toda la documentación. ¡Deja todo en manos de profesionales!",
      },
      {
        question:
          "¿Cómo saber si mi instalación de gas necesita revisión o renovación?",
        answer:
          "Las instalaciones de gas deben revisarse periódicamente para garantizar su seguridad. Si notas olor a gas, fallos en los aparatos o tienes una instalación antigua (más de 15 años), es importante revisarla. ¡Te ofrecemos diagnósticos y asesoramiento personalizado para garantizar tu tranquilidad!",
      },
      {
        question:
          "¿Qué medidas de seguridad aplican en las instalaciones de gas?",
        answer:
          "Seguimos estrictamente la normativa vigente (RITE y reglamento de gas) usando materiales homologados y realizando pruebas de estanqueidad y funcionamiento en cada instalación. Nuestra prioridad es garantizar un servicio seguro, eficiente y duradero. ¡Confía en nuestra experiencia para proteger tu hogar!",
      },
      {
        question: "¿Ofrecen servicio de urgencias de gas en Barcelona?",
        answer:
          "¡Claro que sí! Sabemos que las fugas o averías de gas requieren atención inmediata. Disponemos de un servicio de urgencias para actuar rápidamente en situaciones críticas, garantizando tu seguridad y la de tu familia. ¡Guarda nuestro número y contáctanos ante cualquier emergencia!",
      },
      {
        question:
          "¿Qué beneficios tiene actualizar una instalación de gas antigua?",
        answer:
          "Actualizar tu instalación de gas mejora la seguridad, reduce el riesgo de fugas, optimiza el consumo energético y cumple con la normativa actual. Además, puedes acceder a sistemas de calefacción más eficientes y modernos. ¡Actualiza tu instalación y gana en confort y tranquilidad!",
      },
    ],
  },
  {
    name: "Fontaneria",
    title: "¡Lleva Confort y Seguridad a Tu Hogar con Instalaciones Rodrigo!",
    description:
      "¿Necesitas servicios de fontanería fiables, rápidos y de alta calidad? ¡Confía en nuestros expertos para transformar tu hogar o negocio con soluciones de agua y saneamiento a medida!",
    doforyour: {
      title: "¡Llevamos el Agua que Tu Hogar o Negocio Necesita!",
      icons: [
        {
          icon: Icons.Droplet,
          text: "Instalaciones de Agua Potable y Saneamiento",
        },
        {
          icon: Icons.ShieldCheck,
          text: "Sistemas de Fontanería Seguros y Cumpliendo la Normativa",
        },
        {
          icon: Icons.Thermometer,
          text: "Instalación de Calentadores, Termos y Calderas",
        },
        {
          icon: Icons.Home,
          text: "Reformas Integrales de Baños, Cocinas y Locales",
        },
        {
          icon: Icons.Bolt,
          text: "Reparaciones de Fugas, Averías y Mantenimientos Urgentes",
        },
      ],
    },
    href: "fontaneria",
    img: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937086/IMG-20250406-WA0022_wu9cj1.jpg",
    FaqData: [
      {
        question: "¿Qué tipos de servicios de fontanería ofrecen?",
        answer:
          "Ofrecemos todo tipo de servicios de fontanería: instalación y reparación de redes de agua potable y saneamiento, cambio de griferías, montaje de sanitarios, instalación de calentadores, termos y calderas, así como reformas integrales de baños y cocinas. ¡Cuéntanos tu proyecto y nos encargamos de hacerlo realidad!",
      },
      {
        question:
          "¿Necesito un certificado para una nueva instalación de fontanería?",
        answer:
          "En algunos casos, especialmente en obras nuevas o reformas importantes, es necesario presentar un certificado de instalación de fontanería firmado por un profesional autorizado. Nosotros nos encargamos de todos los trámites para que tu instalación cumpla con la normativa vigente. ¡Te acompañamos en todo el proceso!",
      },
      {
        question:
          "¿Cómo saber si mi instalación de fontanería necesita ser renovada?",
        answer:
          "Si notas fugas de agua, baja presión, malos olores, humedades o tu instalación tiene tuberías antiguas de plomo o hierro, es recomendable renovarla. Una instalación moderna evita problemas mayores y mejora el consumo de agua. ¡Solicita una inspección profesional sin compromiso!",
      },
      {
        question:
          "¿Qué medidas de seguridad aplican en sus trabajos de fontanería?",
        answer:
          "Trabajamos con materiales homologados, seguimos las normativas vigentes y realizamos pruebas de presión y estanqueidad en cada instalación. Además, priorizamos acabados de alta calidad y soluciones duraderas. ¡Confía en nosotros para proteger tu hogar o negocio!",
      },
      {
        question: "¿Ofrecen servicio de urgencias de fontanería en Barcelona?",
        answer:
          "¡Sí! Disponemos de servicio de fontanería urgente para solucionar problemas como fugas de agua, roturas de tuberías, atascos o averías en calentadores. Actuamos de manera rápida y eficiente para evitar daños mayores. ¡Guarda nuestro número y contáctanos cuando nos necesites!",
      },
      {
        question:
          "¿Qué ventajas tiene renovar las instalaciones de fontanería antiguas?",
        answer:
          "Renovar tus tuberías y sistemas de fontanería mejora la seguridad, previene averías, optimiza el consumo de agua y revaloriza tu propiedad. Además, puedes instalar sistemas más eficientes y ecológicos. ¡Dale un nuevo impulso a tu hogar o negocio con una fontanería moderna!",
      },
    ],
  },
  {
    name: "Climatizacion",
    title: "¡Controla la Temperatura de Tu Hogar con Instalaciones Rodrigo!",
    description:
      "¿Necesitas soluciones de climatización modernas, eficientes y a medida? ¡Confía en nuestros expertos para llevar confort y eficiencia energética a tu hogar o negocio durante todo el año!",
    doforyour: {
      title: "¡Climatizamos Tu Espacio para Tu Máximo Confort!",
      icons: [
        {
          icon: Icons.Snowflake,
          text: "Instalación de Aires Acondicionados y Bombas de Calor",
        },
        {
          icon: Icons.ShieldCheck,
          text: "Sistemas de Climatización Seguros y Eficientes",
        },
        {
          icon: Icons.Thermometer,
          text: "Calefacción, Refrigeración y Sistemas de Ventilación",
        },
        {
          icon: Icons.Home,
          text: "Climatización para Hogares, Oficinas y Locales Comerciales",
        },
        {
          icon: Icons.Wrench,
          text: "Mantenimiento, Reparaciones y Optimización Energética",
        },
      ],
    },
    href: "climatizacion",
    img: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937085/IMG-20250406-WA0018_bzonse.jpg",
    FaqData: [
      {
        question: "¿Qué tipos de servicios de climatización ofrecen?",
        answer:
          "Ofrecemos instalación, mantenimiento y reparación de sistemas de climatización como aires acondicionados, bombas de calor, sistemas de calefacción, ventilación mecánica y climatización integral para viviendas, oficinas y locales comerciales. ¡Cuéntanos qué necesitas y te ayudamos a lograr el máximo confort!",
      },
      {
        question:
          "¿Necesito un certificado para instalar un sistema de climatización?",
        answer:
          "Sí, en instalaciones de climatización importantes o en locales comerciales suele ser necesario un certificado emitido por un instalador autorizado. Nosotros nos encargamos de que todo el proceso cumpla con la normativa vigente, para tu tranquilidad y seguridad. ¡Déjalo en manos de expertos!",
      },
      {
        question:
          "¿Cómo saber si mi sistema de climatización necesita ser revisado o renovado?",
        answer:
          "Si notas que tu aire acondicionado o calefacción enfría o calienta menos, hace ruidos extraños, genera malos olores o consume demasiada energía, es momento de revisarlo. Un sistema moderno y eficiente mejora el confort y reduce el consumo energético. ¡Solicita una revisión profesional sin compromiso!",
      },
      {
        question:
          "¿Qué medidas de seguridad aplican en las instalaciones de climatización?",
        answer:
          "Cumplimos estrictamente con las normativas técnicas vigentes (RITE y reglamento de gases refrigerantes), utilizamos materiales homologados y realizamos pruebas de rendimiento y seguridad en cada instalación. La calidad, eficiencia y seguridad son nuestra prioridad.",
      },
      {
        question:
          "¿Ofrecen servicio de urgencias de climatización en Barcelona?",
        answer:
          "¡Claro! Contamos con un servicio de urgencias para atender averías de aires acondicionados, bombas de calor o sistemas de calefacción. Actuamos de forma rápida para que recuperes el confort en tu hogar o negocio cuanto antes. ¡Guarda nuestro contacto y llámanos si tienes una urgencia!",
      },
      {
        question:
          "¿Qué ventajas tiene actualizar un sistema de climatización antiguo?",
        answer:
          "Actualizar tu sistema de climatización te permite mejorar la eficiencia energética, ahorrar en consumo eléctrico, reducir emisiones contaminantes y disfrutar de un mayor confort térmico durante todo el año. Además, los equipos modernos son más silenciosos y respetuosos con el medio ambiente. ¡Da el paso hacia un hogar más eficiente!",
      },
    ],
  },
  {
    name: "Calefaccion",
    title: "¡Calor Eficiente y Confortable con Instalaciones Rodrigo!",
    description:
      "¿Buscas una solución de calefacción moderna, segura y eficiente? Nuestro equipo de expertos está listo para llevar el máximo confort térmico a tu hogar o negocio durante todo el invierno.",
    doforyour: {
      title: "¡Especialistas en Calefacción para Tu Máxima Comodidad!",
      icons: [
        {
          icon: Icons.Flame,
          text: "Instalación de Sistemas de Calefacción Central y Localizada",
        },
        {
          icon: Icons.ShieldCheck,
          text: "Sistemas de Calefacción Seguros, Confiables y Duraderos",
        },
        {
          icon: Icons.Thermometer,
          text: "Calderas, Radiadores, Suelo Radiante y Más",
        },
        {
          icon: Icons.Home,
          text: "Soluciones de Calefacción para Hogares, Oficinas y Negocios",
        },
        {
          icon: Icons.Wrench,
          text: "Mantenimiento, Reparaciones y Mejora de Eficiencia Energética",
        },
      ],
    },
    href: "calefaccion",
    img: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937085/IMG-20250406-WA0002_esuyov.jpg",
    FaqData: [
      {
        question: "¿Qué tipos de servicios de calefacción ofrecen?",
        answer:
          "Ofrecemos instalación, mantenimiento y reparación de sistemas de calefacción como calderas de gas, bombas de calor, radiadores, suelo radiante y estufas de pellets. Nos adaptamos a viviendas, oficinas y locales comerciales para garantizar el mejor confort térmico.",
      },
      {
        question:
          "¿Necesito un certificado para instalar un sistema de calefacción?",
        answer:
          "Sí, para instalaciones de calefacción, especialmente en sistemas de gas o de gran potencia, es obligatorio contar con un certificado emitido por un instalador autorizado. Nosotros gestionamos toda la documentación necesaria para asegurar que tu instalación cumpla con la normativa vigente.",
      },
      {
        question:
          "¿Cómo saber si mi sistema de calefacción necesita ser revisado o cambiado?",
        answer:
          "Si notas que tu calefacción calienta menos, consume más energía de lo normal, hace ruidos extraños o presenta fugas, es momento de revisarla. Un sistema eficiente no solo mejora el confort, sino que también reduce costes en tus facturas. ¡Te asesoramos sin compromiso!",
      },
      {
        question:
          "¿Qué medidas de seguridad aplican en las instalaciones de calefacción?",
        answer:
          "Seguimos estrictamente las normativas de seguridad en instalaciones térmicas (RITE) y utilizamos solo materiales certificados. Además, realizamos pruebas de funcionamiento y revisiones de seguridad en cada proyecto para garantizar instalaciones seguras, eficientes y duraderas.",
      },
      {
        question:
          "¿Ofrecen servicio de urgencias en sistemas de calefacción en Barcelona?",
        answer:
          "¡Sí! Disponemos de un servicio de urgencias para atender averías en sistemas de calefacción. Sabemos lo importante que es mantener tu hogar cálido, especialmente en invierno, por eso actuamos rápidamente para devolverte el confort lo antes posible.",
      },
      {
        question:
          "¿Qué ventajas tiene actualizar un sistema de calefacción antiguo?",
        answer:
          "Renovar tu sistema de calefacción mejora la eficiencia energética, reduce tus facturas de energía y proporciona un confort más homogéneo. Además, los nuevos sistemas son más respetuosos con el medio ambiente y cumplen con normativas actuales de seguridad y eficiencia.",
      },
    ],
  },
  {
    name: "ReformasIntegrales",
    title: "¡Transforma Tu Espacio con Instalaciones Rodrigo!",
    description:
      "¿Buscas una reforma integral moderna, funcional y adaptada a tus necesidades? Nuestro equipo de profesionales está listo para renovar por completo tu hogar o negocio, garantizando calidad, eficiencia y diseño en cada detalle.",
    doforyour: {
      title: "¡Especialistas en Reformas para Crear Espacios Únicos!",
      icons: [
        {
          icon: Icons.Home,
          text: "Reformas Integrales de Viviendas, Oficinas y Locales Comerciales",
        },
        {
          icon: Icons.Paintbrush,
          text: "Diseño de Interiores, Decoración y Acabados Personalizados",
        },
        {
          icon: Icons.Bolt,
          text: "Fontanería, Electricidad, Agua, Calefaccion, Verticales",
        },
        {
          icon: Icons.Ruler,
          text: "Proyectos a Medida con Asesoramiento Técnico y Estético",
        },
        {
          icon: Icons.ShieldCheck,
          text: "Calidad, Seguridad y Cumplimiento de Normativas",
        },
      ],
    },

    href: "reformas-integrales",
    img: "https://res.cloudinary.com/dvqgkdvgg/image/upload/t_Banner 16:9/v1743937087/IMG-20250406-WA0010_qlusq3.jpg",
    FaqData: [
      {
        question: "¿Qué tipos de servicios de reformas integrales ofrecen?",
        answer:
          "Ofrecemos reformas completas de viviendas, oficinas y locales comerciales. Nos encargamos de todo: diseño, demolición, albañilería, fontanería, electricidad, carpintería, pintura y acabados, entregándote un espacio renovado y a medida.",
      },
      {
        question:
          "¿Necesito permisos o licencias para realizar una reforma integral?",
        answer:
          "Sí, en la mayoría de los casos es necesario solicitar permisos o licencias de obra ante el ayuntamiento, especialmente si se modifican elementos estructurales o fachadas. Nosotros te asesoramos y nos encargamos de la gestión de toda la documentación necesaria.",
      },
      {
        question: "¿Cuánto tiempo suele durar una reforma integral?",
        answer:
          "La duración depende del tamaño y la complejidad del proyecto, pero una reforma integral suele tardar entre 2 y 6 meses. Realizamos una planificación detallada para cumplir con los plazos establecidos y mantenerte informado en cada etapa del proceso.",
      },
      {
        question: "¿Qué garantías ofrecen en las reformas integrales?",
        answer:
          "Todas nuestras reformas cuentan con garantía de calidad, cumplimiento de normativas y materiales certificados. Además, ofrecemos garantía post-obra para tu tranquilidad, resolviendo cualquier incidencia que pudiera surgir tras la entrega.",
      },
      {
        question: "¿Puedo seguir viviendo en casa durante la reforma?",
        answer:
          "Dependerá del alcance de la reforma. En proyectos muy grandes o estructurales recomendamos buscar alojamiento temporal. En reformas parciales o bien organizadas, es posible coordinar el trabajo por zonas para minimizar molestias.",
      },
      {
        question:
          "¿Qué ventajas tiene contratar una empresa especializada en reformas integrales?",
        answer:
          "Contar con profesionales evita retrasos, problemas técnicos y sobrecostes. Gestionamos cada detalle del proyecto, coordinamos todos los oficios, optimizamos tiempos y garantizamos un resultado final de alta calidad y adaptado a tus necesidades.",
      },
    ],
  },
];

export default ReformasData;
