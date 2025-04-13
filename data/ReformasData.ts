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
  FaqData: FAQItem[]
}


 const ReformasData: ServicesReformas[] = [
  {
  name: "Pintura",
  title:
  "¡Dale Vida y Color a Tu Hogar con las Reformas de Pintura de Reformas Ya Barcelona!",
  description:
  "¿Te gustaría que tu hogar tuviera el toque perfecto que siempre soñaste? ¡Hazlo realidad con una reforma de pintura que lo transforme por completo!",
  doforyour: {
  title: "¡Transformamos Tus Paredes en Obras de Arte!",
  icons: [
  {
  icon: Icons.Palette,
  text: "Colores Personalizados que Reflejan tu Estilo",
  },
  { icon: Icons.Droplet, text: "Pintura de Alta Calidad y Ecológica" },
  { icon: Icons.Paintbrush, text: "Texturas y Acabados que Deslumbran" },
  { icon: Icons.Home, text: "Pintura para Todos los Espacios" },
  {
  icon: Icons.CheckCircle,
  text: "Técnicas Avanzadas para Resultados Perfectos",
  },
  ],
  },
  href: "reforma-pintura",
  img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733315345/coiwowmwsulew2w6gk05.jpg",
  FaqData:[
  {
  question: "¿Qué tipos de pintura son adecuados para interiores y exteriores?",
  answer:
  "Cada espacio tiene sus necesidades específicas. Para interiores, recomendamos pinturas plásticas o acrílicas, conocidas por su fácil limpieza y acabado impecable. Para exteriores, los revestimientos resistentes a la intemperie son la mejor opción, ya que soportan condiciones climáticas extremas sin perder calidad. Contáctanos hoy y te ayudaremos a elegir la pintura perfecta para cada rincón de tu hogar.",
  },
  {
  question: "¿Cómo elegir el color de pintura adecuado para cada habitación?",
  answer:
  "Los colores no solo transforman un espacio, también influyen en el ambiente y las emociones. Los tonos claros aportan amplitud, mientras que los cálidos generan ambientes acogedores. Nuestro equipo te guía para encontrar combinaciones que reflejen tu estilo y personalidad. Déjanos asesorarte y juntos crearemos un hogar lleno de vida, ¡contáctanos ahora!",
  },
  {
  question: "¿Cuál es el tiempo de secado de las diferentes pinturas?",
  answer:
  "El tiempo de secado varía según el tipo de pintura y las condiciones ambientales. Las pinturas al agua suelen secar al tacto en 4 a 6 horas, mientras que los esmaltes o pinturas al aceite requieren hasta 24 horas. Además, la ventilación y humedad del espacio pueden influir en este proceso. Confía en nosotros para planificar tu proyecto y optimizar el tiempo de ejecución. ¡Pide tu presupuesto ahora!",
  },
  {
  question: "¿Qué preparación requieren las superficies antes de pintar?",
  answer:
  "Un acabado duradero comienza con una preparación adecuada. Esto incluye limpiar las superficies, reparar grietas y aplicar imprimación para garantizar una adhesión perfecta de la pintura. En nuestra empresa, nos encargamos de cada detalle para que no tengas que preocuparte. ¿Quieres un resultado profesional? Llámanos y haremos realidad tus ideas.",
  },
  {
  question: " ¿Qué diferencias existen entre los acabados mate, satinado y brillante?",
  answer:
  "Los acabados mate son ideales para crear ambientes sobrios y elegantes, ya que disimulan imperfecciones y aportan un acabado suave; el satinado, con su brillo sutil, es perfecto para espacios de mucho uso, ya que es fácil de limpiar y resistente al desgaste; mientras que el brillante destaca por su acabado reflectante, ideal para detalles decorativos y muebles con estilo moderno. ¿No sabes cuál elegir? Escríbenos y juntos encontraremos el acabado perfecto para tu proyecto.",
  },
  {
  question: "¿Cómo prevenir y tratar problemas de humedad o moho antes de pintar?",
  answer:
  "La humedad y el moho no solo afectan la estética de tus paredes, sino también tu salud. Antes de pintar, identificamos y eliminamos el problema desde la raíz, aplicando tratamientos específicos que evitan su reaparición. Protege tu hogar y mejora su apariencia con nuestra ayuda. ¡Contáctanos ahora y déjanos cuidar de cada detalle!",
  },
  ]
  },
  {
  name: "Reforma de Cocina",
  title:
  "¡Haz de Tu Cocina el Corazón de Tu Hogar con Reformas Ya Barcelona!",
  description:
  "¿Estás listo para que tu cocina sea el lugar que siempre has soñado? ¡Lo haremos realidad, y más rápido de lo que imaginas!",
  doforyour: {
  title: "¡Crea la Cocina de Tus Sueños, Hecha a Tu Medida!",
  icons: [
  { icon: Icons.Home, text: "Cocinas Personalizadas que Hablan de Ti" },
  {
  icon: Icons.Box,
  text: "Almacenaje Inteligente y Estilo sin Compromisos",
  },
  { icon: Icons.Lightbulb, text: "Tecnología de Punta en Tu Cocina" },
  { icon: Icons.Layers, text: "Superficies que Dejan Huella" },
  { icon: Icons.Lightbulb, text: "Ilumina tu Cocina con Estilo" },
  ],
  },
  href: "reforma-cocina",
  img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733315205/t5eej5opgmqvu1fjuvmg.jpg",
  FaqData:[
  {
  question: "¿Cuánto tiempo se tarda en reformar una cocina?",
  answer:
  "El tiempo de reforma depende del tamaño y la complejidad del proyecto, pero generalmente varía entre 2 y 4 semanas. Las reformas más simples pueden completarse rápidamente, mientras que un proyecto más grande o personalizado puede tardar un poco más. ¡Contáctanos hoy mismo para un presupuesto detallado y una estimación de tiempo exacta para tu reforma!",
  },
  {
  question: "¿Cuál es el costo promedio de una reforma de cocina?",
  answer:
  "El costo de una reforma de cocina varía según los materiales, el tamaño de la cocina y los acabados elegidos. Una reforma básica puede costar desde 5.000 €, mientras que una reforma de lujo puede superar los 20.000 €. ¿Quieres saber cuánto costaría reformar tu cocina? ¡Pide tu presupuesto personalizado ahora mismo!",
  },
  {
  question: "¿Qué materiales son recomendables para las encimeras de cocina?",
  answer:
  "Las opciones más recomendadas incluyen granito, cuarzo, acero inoxidable y madera. El granito es duradero y elegante, el cuarzo es resistente a manchas, y la madera aporta calidez. ¿No sabes qué material elegir? ¡Déjanos asesorarte y encontrar la mejor opción para tu cocina!",
  },
  {
  question: "¿Es posible cambiar la distribución de la cocina durante la reforma?",
  answer:
  "Sí, cambiar la distribución es posible si se ajustan correctamente las instalaciones de agua, gas y electricidad. Este tipo de reforma transforma completamente el espacio, pero requiere una planificación detallada. ¿Estás pensando en cambiar la distribución? ¡Contacta con nosotros y hacemos realidad la cocina de tus sueños!",
  },
  {
  question: "¿Qué tipo de iluminación es ideal para una cocina?",
  answer:
  "Lo ideal es combinar iluminación general para todo el espacio, puntual en las áreas de trabajo (como la encimera) y decorativa para crear ambiente. La correcta iluminación no solo es funcional, sino que también resalta la belleza de tu cocina. ¡Deja que nuestros expertos planifiquen la iluminación perfecta para ti!",
  },
  {
  question: "¿Es necesario obtener permisos para reformar una cocina?",
  answer:
  "Si la reforma afecta a las instalaciones de agua, gas o la estructura de la casa, es necesario obtener permisos municipales. No te preocupes, nosotros gestionamos todo el proceso para asegurarnos de que tu reforma cumpla con las normativas locales. ¿Quieres saber más sobre permisos? ¡Contáctanos y te guiamos en todo el proceso!",
  },
  ]
  },
  {
  name: "Reforma de Baño",
  title: "¡Convierte tu Baño en un Oasis de Relax con Reformas Ya Barcelona!",
  description:
  "¿Sueñas con un baño moderno, funcional y elegante? ¡Reformas Ya Barcelona lo hace realidad con soluciones a medida que combinan confort y estilo!",
  doforyour: {
  title: "¡Diseñamos Baños que Te Harán Sentir en un Spa!",
  icons: [
  { icon: Icons.Home, text: "Diseños Personalizados que Encantan" },
  { icon: Icons.Droplet, text: "Soluciones Eficientes y Sostenibles" },
  { icon: Icons.Layers, text: "Materiales de Alta Calidad y Duraderos" },
  { icon: Icons.Lightbulb, text: "Iluminación que Realza tu Espacio" },
  {
  icon: Icons.CheckCircle,
  text: "Detalles y Acabados que Hacen la Diferencia",
  },
  ],
  },
  href: "reforma-banos",
  img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1732883130/rexn3klewfnucdfzxbyz.jpg",
  FaqData:[
  {
  question: "¿Cuánto cuesta reformar un baño?",
  answer:
  "El costo de reformar un baño depende de varios factores: tamaño, materiales y tipo de reforma. Para una reforma básica, el precio puede estar entre 3.000 € y 6.000 €, mientras que una reforma de gama alta o de lujo puede superar los 10.000 €. ¿Quieres saber el precio exacto? ¡Contáctanos ahora mismo para un presupuesto personalizado sin compromiso y descubre cómo podemos ajustar la reforma a tu presupuesto!",
  },
  {
  question: "¿Cuánto tiempo se tarda en reformar un baño?",
  answer:
  "El tiempo de reforma depende de la magnitud del proyecto. Una reforma integral puede tardar entre 7 y 15 días, mientras que trabajos más simples (como la sustitución de azulejos o sanitarios) pueden completarse en 3 a 5 días. ¿Te gustaría saber cuánto tiempo llevará tu reforma? ¡Pide una consulta gratis y te damos un cronograma detallado según tus necesidades!",
  },
  {
  question: "¿Qué materiales son mejores para el suelo y las paredes del baño?",
  answer:
  "Para los suelos y paredes de baño, los materiales más recomendados son los azulejos cerámicos o porcelánicos, que son duraderos, fáciles de limpiar y resistentes a la humedad; el microcemento, ideal para un estilo moderno, sin juntas y de fácil mantenimiento; la piedra natural, que aporta un toque elegante y sofisticado; y los vinilos, una opción económica y resistente, perfecta para suelos. ¿No sabes por dónde empezar? ¡Déjanos asesorarte y ayudarte a elegir los materiales perfectos para tu baño según tus gustos y estilo!",
  },
  {
  question: "¿Es posible cambiar la distribución del baño durante la reforma?",
  answer:
  "Sí, es posible cambiar la distribución del baño, moviendo sanitarios o modificando la ubicación de las instalaciones. Este tipo de reforma puede mejorar la funcionalidad y la estética de tu espacio. ¿Quieres optimizar tu baño? Contáctanos para crear una distribución que maximice tu espacio y se adapte a tus necesidades.",
  },
  {
  question: "¿Cómo hacer que un baño pequeño se vea más grande?",
  answer:
  "Para hacer que un baño pequeño se vea más grande, te recomendamos utilizar colores claros en las paredes y muebles, instalar espejos grandes para ampliar visualmente el espacio, optar por muebles suspendidos para liberar el suelo y elegir una ducha a ras de suelo para un aspecto más fluido y abierto. ¿Quieres ideas personalizadas? ¡Déjanos ayudarte a maximizar cada centímetro de tu baño y hacerlo lucir más amplio y funcional!",
  },
  {
  question: "¿Es necesario obtener permisos para reformar un baño?",
  answer:
  "Si la reforma afecta a las instalaciones de agua, gas o electricidad, necesitarás obtener permisos municipales. Reformas simples como cambiar azulejos o sanitarios no requieren permisos. ¿Te preocupa el tema de los permisos? Nosotros nos encargamos de todo para que tu reforma sea completamente legal y sin complicaciones. ¡Contáctanos y te ayudamos en cada paso del proceso!",
  },
  ]
  },
  {
  name: "Reforma Integral",
  title:
  "¡Transforma tu Hogar con Reformas Integrales de Calidad con Reformas Ya Barcelona!",
  description:
  "¿Quieres darle una nueva vida a tu hogar? Reformas Ya Barcelona te ofrece reformas integrales adaptadas a tus necesidades, combinando funcionalidad, estética y calidad en cada rincón de tu casa.",
  doforyour: {
  title: "¡Rediseñamos tu Hogar de Arriba a Abajo!",
  icons: [
  {
  icon: Icons.Home,
  text: "Proyectos Personalizados para Cada Espacio",
  },
  { icon: Icons.Droplet, text: "Soluciones Innovadoras y Sostenibles" },
  {
  icon: Icons.Layers,
  text: "Materiales de Alta Gama y Larga Durabilidad",
  },
  { icon: Icons.Lightbulb, text: "Diseño de Interiores que Inspira" },
  {
  icon: Icons.CheckCircle,
  text: "Acabados Impecables para un Toque de Distinción",
  },
  ],
  },
  href: "reforma-integral",
  img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733319801/fn7px9zicbna4mwqhm6z.jpg",
  FaqData:[
  {
  question: "¿Cuánto cuesta una reforma integral?",
  answer:
  "El costo de una reforma integral depende del tamaño y los materiales, con precios desde 25.000 € para una vivienda de 55 m². Este precio incluye todo: demolición, instalaciones, suelos, paredes y acabados. Cada reforma es única, por lo que ajustamos el presupuesto según tus necesidades y estilo. ¿Quieres un presupuesto a medida? ¡Contáctanos y te proporcionamos una estimación personalizada",
  },
  {
  question: "¿Cuánto tiempo se tarda en realizar una reforma integral?",
  answer:
  "El tiempo de una reforma integral depende del alcance del proyecto; generalmente, una reforma completa de 60 a 90 m² puede tardar entre 2 y 3 meses, mientras que reformas más pequeñas, como un baño o cocina, pueden estar listas en 1 a 4 semanas.¿Tienes una fecha límite? ¡Déjanos ajustar los plazos para que tu reforma se realice sin contratiempos!",
  },
  {
  question: "¿Qué incluye una reforma integral?",
  answer:
  "Una reforma integral cubre todo, desde la demolición hasta los acabados finales: reformas en instalaciones eléctricas, fontanería, suelos, paredes, y más. Nos encargamos de todo para que tu hogar quede renovado y funcional, con acabados de alta calidad.¿Te gustaría transformar tu hogar por completo? ¡Contáctanos y comenzamos a planificar tu reforma integral!",
  },
  {
  question: "¿Es necesario obtener permisos para una reforma integral?",
  answer:
  "Sí, muchas reformas requieren permisos para cumplir con las normativas locales, especialmente si afectan a la estructura o instalaciones. Nosotros nos encargamos de gestionar todos los permisos necesarios, asegurando que tu reforma sea completamente legal y sin complicaciones.¿Te preocupa el papeleo? ¡Déjanos gestionar los permisos por ti y disfruta de una reforma sin estrés!",
  },
  {
  question: "¿Puedo elegir los materiales para mi reforma?",
  answer:
  "Claro, puedes elegir los materiales que mejor se adapten a tu estilo y presupuesto. Te asesoramos en la selección de materiales de alta calidad, asegurándonos de que cada elección encaje perfectamente con tu visión y necesidades.¿Necesitas ayuda para elegir? ¡Contáctanos y te guiamos en la selección de los mejores materiales!",
  },
  {
  question: " ¿Qué garantías ofrecen en las reformas integrales?",
  answer:
  "Ofrecemos una garantía de calidad sobre la mano de obra y los materiales utilizados, asegurándonos de que tu reforma cumpla con los más altos estándares. Si surge algún problema durante el período de garantía, nos encargamos de solucionarlo sin costo adicional.¿Quieres saber más sobre nuestras garantías? ¡Hablemos y te explicamos todo en detalle!",
  },
  ]
  },
  {
  name: "Pladur",
  title:
  "¡Crea Espacios Versátiles y Modernos con Instalaciones de Pladur de Reformas Ya Barcelona!",
  description:
  "El pladur es la solución ideal para construir espacios funcionales y estéticamente impecables. Desde tabiques hasta techos y revestimientos, te ofrecemos acabados de alta calidad que se adaptan a cualquier estilo.",
  doforyour: {
  title: "¡Reinventa tu Hogar o Local con Pladur!",
  icons: [
  { icon: Icons.Layers, text: "Tabiques y Techos a Medida" },
  { icon: Icons.Lightbulb, text: "Sistemas de Iluminación Integrados" },
  { icon: Icons.Home, text: "Aislamiento Térmico y Acústico" },
  { icon: Icons.CheckCircle, text: "Montaje Rápido y Duradero" },
  {
  icon: Icons.Box,
  text: "Soluciones Creativas para Espacios Reducidos",
  },
  ],
  },
  href: "reforma-pladur",
  img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397012/wixolg0ovovz4damhrn8.jpg",
  FaqData:[
  {
  question: "¿Qué es el Pladur y para qué se utiliza?",
  answer:
  "El Pladur es un material compuesto por yeso entre dos capas de cartón, ideal para crear tabiques, techos y revestimientos interiores. Su facilidad de instalación, versatilidad y propiedades de aislamiento térmico y acústico lo hacen perfecto para reformas rápidas y eficaces.¿Listo para transformar tu hogar con Pladur? ¡Contáctanos y te asesoramos sobre la mejor opción para tu proyecto!",
  },
  {
  question: "¿Cuáles son las ventajas de usar Pladur en una reforma?",
  answer:
  "El Pladur es ligero, económico y permite realizar reformas rápidas con acabados profesionales. Ofrece una excelente aislación térmica y acústica, lo que mejora el confort de tu hogar sin complicaciones.¿Quieres aprovechar sus ventajas en tu reforma? ¡Escríbenos y te ayudamos a elegir la mejor solución para ti!",
  },
  {
  question: "¿Es el Pladur resistente a la humedad y al fuego?",
  answer:
  "Sí, existen variantes como el Pladur HR (resistente a la humedad) y el Pladur RF (resistente al fuego), ideales para espacios como baños, cocinas y zonas con mayor riesgo de incendio.¿Te gustaría saber qué Pladur es el más adecuado para tu hogar? ¡Consulta con nosotros y te guiamos en la elección perfecta!",
  },
  {
  question: "¿Se puede pintar el Pladur después de instalarlo?",
  answer:
  "¡Por supuesto! El Pladur se puede pintar fácilmente una vez instalado, brindándote la posibilidad de personalizar tus espacios según tus gustos. Solo asegúrate de preparar bien la superficie para un acabado duradero.¿Necesitas ayuda para elegir la pintura perfecta? ¡Contáctanos y te asesoramos para un acabado impecable!",
  },
  {
  question: "¿Cuánto cuesta instalar Pladur?",
  answer:
  "El costo de instalar Pladur depende de la superficie, el tipo de material y la complejidad de la instalación. Generalmente, los precios varían entre 15-25 €/m², pero cada proyecto es único.¿Quieres un presupuesto personalizado? ¡Solicita tu cotización ahora y te damos un precio ajustado a tus necesidades!",
  },
  {
  question: "¿Se puede instalar Pladur sobre superficies irregulares o viejas?",
  answer:
  "Sí, el Pladur puede instalarse sobre superficies irregulares, aunque es importante prepararlas adecuadamente para asegurar que el material se fije correctamente y tenga una larga duración.¿Tu superficie necesita preparación? ¡Déjanos ayudarte a poner todo en orden y hacer la instalación sin problemas!",
  },
  ]
  },
  {
  name: "Fontanería",
  title:
  "¡Soluciones de Fontanería Eficientes y Confiables con Reformas Ya Barcelona!",
  description:
  "¿Problemas con tus tuberías o necesitas renovar tu sistema de fontanería? Nuestro equipo de profesionales garantiza instalaciones modernas, eficientes y libres de preocupaciones.",
  doforyour: {
  title: "¡Hacemos que el Agua Fluya sin Problemas!",
  icons: [
  { icon: Icons.Droplet, text: "Instalaciones y Reparaciones Complejas" },
  { icon: Icons.Wrench, text: "Mantenimiento Preventivo y Correctivo" },
  { icon: Icons.Plug, text: "Sistemas de Agua Caliente Eficientes" },
  { icon: Icons.Box, text: "Renovación Completa de Baños y Cocinas" },
  { icon: Icons.CheckCircle, text: "Soluciones Rápidas y Garantizadas" },
  ],
  },
  href: "reforma-fontaneria",
  img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397175/ttyz9lpmjzvxprg4pc26.jpg",
  FaqData:[
  {
  question: "¿Qué provoca una baja presión de agua en mi hogar?",
  answer:
  "La baja presión puede deberse a obstrucciones en las tuberías, válvulas mal ajustadas o sistemas antiguos. También podría ser un problema en la red general. Resolverlo requiere una revisión profesional para garantizar un suministro eficiente.¿Te afecta la presión baja? ¡Déjanos ayudarte a restablecer el flujo perfecto en tu hogar!",
  },
  {
  question: " ¿Cuándo es necesario cambiar las tuberías de una vivienda?",
  answer:
  "Es hora de cambiar las tuberías si notas fugas frecuentes, corrosión o si están hechas de materiales obsoletos como el plomo. Renovarlas mejora la calidad del agua, evita averías y asegura un sistema más eficiente y duradero.¿Tienes dudas? ¡Contacta con nosotros y modernizamos tu instalación con la mejor calidad!",
  },
  {
  question: "¿Qué materiales son los mejores para instalaciones de fontanería?",
  answer:
  "El cobre, el PVC y el polietileno son las opciones más utilizadas. El cobre es ideal para agua caliente por su durabilidad, el PVC es económico y práctico para desagües, y el polietileno es flexible y fácil de instalar. Elegir el adecuado depende de tus necesidades.¿No sabes qué material elegir? ¡Nosotros te asesoramos para garantizar la solución perfecta!",
  },
  {
  question: "¿Cómo evitar atascos en los desagües?",
  answer:
  "Evita tirar grasas, aceites o restos sólidos por los desagües y usa rejillas protectoras. Limpiar regularmente los sistemas de drenaje es clave para prevenir atascos. Si el problema persiste, lo mejor es actuar rápido para evitar daños mayores.¿Atascos recurrentes? ¡Llámanos y lo solucionamos de inmediato!",
  },
  {
  question: "¿Es necesario solicitar permisos para renovar la fontanería?",
  answer:
  "Sí, las reformas grandes o que implican cambios en las tuberías suelen requerir permisos municipales. Estos garantizan que el trabajo cumpla con las normativas. Nosotros nos encargamos de todo para que tú no tengas que preocuparte. ¿Necesitas ayuda con los permisos? ¡Déjanos gestionar todo por ti y disfruta de una reforma sin complicaciones!",
  },
  {
  question: "¿Cuánto cuesta renovar la instalación de fontanería?",
  answer:
  "El costo depende del tamaño del proyecto, los materiales y la complejidad del trabajo. Aunque supone una inversión, renueva tu hogar, previene averías y mejora la calidad de vida.¿Buscas un presupuesto transparente? ¡Pide tu cotización gratuita y descubre cuánto puedes ganar renovando tu instalación!",
  },
  ]
  },
  {
  name: "Reforma de Oficinas",
  title:
  "¡Transforma tu Espacio de Trabajo con las Reformas de Oficinas de Reformas Ya Barcelona!",
  description:
  "¿Buscas una oficina moderna, funcional y acorde a las necesidades de tu equipo? Reformas Ya Barcelona convierte cualquier espacio en un lugar productivo y estilizado.",
  doforyour: {
  title: "¡Crea Oficinas que Inspiran y Motivan!",
  icons: [
  { icon: Icons.Home, text: "Diseño Ergonométrico y Funcional" },
  { icon: Icons.Lightbulb, text: "Iluminación Profesional y Ambiental" },
  { icon: Icons.Box, text: "Espacios de Almacenaje Inteligentes" },
  { icon: Icons.Palette, text: "Acabados Modernos y Elegantes" },
  {
  icon: Icons.CheckCircle,
  text: "Adecuación Técnica y Cableado Eficiente",
  },
  ],
  },
  href: "reforma-oficinas",
  img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733397096/y4qgps38o0squksbboto.jpg",
  FaqData:[
  {
  question: "¿Cuánto cuesta reformar una oficina?",
  answer:
  "El costo depende del tamaño, la complejidad de la reforma y los materiales seleccionados. Las reformas más simples, como pintura y cambio de mobiliario, son más asequibles, pero una reforma integral que incluya cambios en la distribución o instalaciones puede aumentar el precio.¡Solicita tu presupuesto personalizado! Te ayudamos a encontrar la opción que mejor se ajuste a tu presupuesto y necesidades.",
  },
  {
  question: "¿Qué permisos necesito para reformar una oficina?",
  answer:
  "Si la reforma implica cambios en la estructura o instalaciones (electricidad, fontanería), necesitarás permisos específicos. Nosotros nos encargamos de gestionar toda la parte legal y administrativa, garantizando que todo cumpla con la normativa vigente.¡Deja que nosotros nos encarguemos de los permisos! Así podrás centrarte en lo que realmente importa: tu negocio.",
  },
  {
  question: "¿Cómo evitar interrumpir las actividades laborales durante la reforma?",
  answer:
  "Planificamos la reforma en fases y fuera del horario laboral para evitar afectar la productividad de tu equipo. Nos aseguramos de que las interrupciones sean mínimas, sin comprometer la calidad del trabajo. ¡Contáctanos y planifiquemos juntos una reforma sin interrupciones! Te ayudamos a mantener el flujo de trabajo sin inconvenientes.",
  },
  {
  question: "¿Qué materiales son ideales para una reforma de oficina?",
  answer:
  "Para una reforma de oficina, recomendamos materiales duraderos y de fácil mantenimiento como el vidrio, vinílico o madera. También puedes optar por opciones ecológicas que mejoren la sostenibilidad. Te asesoramos en cada elección para adaptarnos a tu estilo y necesidades. ¡Consulta con nuestros expertos! Te ayudamos a elegir los materiales más adecuados para tu oficina.",
  },
  {
  question: "¿Cuáles son las tendencias de diseño para oficinas modernas?",
  answer:
  "Las oficinas modernas promueven espacios abiertos, zonas colaborativas y mobiliario ergonómico para favorecer la productividad. Incorporar tecnología y elementos sostenibles también es clave para crear un ambiente atractivo y funcional.¡Haz que tu oficina inspire! Contáctanos y diseñamos un espacio que mejore la productividad y bienestar de tu equipo.",
  },
  {
  question: "¿Cuánto tiempo toma una reforma de oficina?",
  answer:
  "El tiempo varía según la magnitud de la reforma. Las reformas pequeñas, como la pintura o cambio de mobiliario, pueden tomar entre 2 y 4 semanas. Las reformas más grandes, que incluyen modificaciones estructurales o cambios importantes en las instalaciones, pueden tardar entre 1 y 3 meses. ¡Solicita tu cronograma personalizado! Te damos un plan claro y ajustado a tus plazos, para que tu oficina esté lista a tiempo.",
  },
  ]
  },
  {
  name: "Obras Menores",
  title: "¡Pequeñas Obras, Grandes Resultados con Reformas Ya Barcelona!",
  description:
  "¿Necesitas ajustes o reparaciones rápidas? En Reformas Ya Barcelona atendemos pequeñas obras con el mismo compromiso y calidad que los grandes proyectos.",
  doforyour: {
  title: "¡Resolvemos Tus Necesidades con Rapidez y Precisión!",
  icons: [
  { icon: Icons.Wrench, text: "Reparaciones y Ajustes Precisos" },
  { icon: Icons.Paintbrush, text: "Pequeños Trabajos de Pintura" },
  { icon: Icons.Layers, text: "Revestimientos y Mejoras Puntuales" },
  { icon: Icons.Box, text: "Montaje de Muebles y Elementos Decorativos" },
  { icon: Icons.CheckCircle, text: "Atención Rápida y Profesional" },
  ],
  },
  href: "obras-menores",
  img: "https://res.cloudinary.com/dq0pfesxe/image/upload/v1733396757/rvy4iclukm3duyo48wsl.jpg",
  FaqData:[
  {
  question: "¿Qué se considera una obra menor?",
  answer:
  "Las obras menores son reformas que no afectan la estructura del edificio, como la renovación de suelos, pintura o cambios en fontanería. Son intervenciones rápidas y de bajo impacto.¡Transforma tu hogar hoy! Contáctanos y te ayudamos a mejorar tu espacio con soluciones eficaces.",
  },
  {
  question: "¿Es necesario solicitar permisos para realizar una obra menor?",
  answer:
  "Generalmente, las obras menores no requieren permisos, pero si afectan instalaciones o la fachada, pueden ser necesarios. Nosotros gestionamos todos los permisos para ti.¡Deja los trámites en nuestras manos! Contáctanos y nos encargamos de todo el proceso para que no tengas que preocuparte.",
  },
  {
  question: "¿Cuánto tiempo suele durar una obra menor?",
  answer:
  "Las obras menores suelen completarse en pocos días o una semana, dependiendo de la intervención. Nos aseguramos de cumplir con los plazos establecidos.¡Hazlo rápido y bien! Solicita tu cronograma personalizado y disfruta de tu reforma en el menor tiempo posible.",
  },
  {
  question: "¿Cuáles son las obras menores más comunes en reformas integrales?",
  answer:
  "Renovación de baños, instalación de nuevos suelos, cambios de iluminación y redistribución de espacios. Son reformas fáciles de realizar que transforman tu espacio.¡Dale un nuevo aire a tu hogar! Consulta con nosotros y te ayudamos a elegir la reforma que más se ajuste a tus necesidades.",
  },
  {
  question: "¿Es más económico realizar una obra menor que una reforma completa?",
  answer:
  "Sí, las obras menores son más asequibles porque no requieren modificaciones estructurales. Son perfectas para pequeñas mejoras sin gran inversión.¡Consulta tu presupuesto! Te ofrecemos soluciones adaptadas a tu presupuesto para renovar tu hogar de manera económica.",
  },
  {
  question: "¿Puedo realizar una obra menor por mi cuenta o es recomendable contratar a un profesional?",
  answer:
  "Aunque algunas reformas menores son fáciles, siempre es mejor contar con profesionales para garantizar que el trabajo sea seguro, eficiente y conforme a la normativa.¡Confía en los expertos! Déjanos encargarnos de todo para obtener un resultado perfecto y sin complicaciones.",
  },
  ]
  },
  ];


  export default ReformasData