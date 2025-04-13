import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";
import DoForYou from "@/components/ui/ServicesUi/DoForYou";
import EngagementSection from "@/components/ui/ServicesUi/Engangement";
import FAQSectionServices from "@/components/ui/ServicesUi/FaqSection";
import ServicesHeader from "@/components/ui/ServicesUi/ServicesHeader";
import VentajasSection from "@/components/ui/ServicesUi/VentajasSection";
import ReformasData from "@/data/ReformasData";
// Define la interfaz para los datos de reforma
interface ReformaItem {
  name: string;
  href: string;
  description: string;
  title: string;
  doforyour: {
    title: string;
    icons: Array<{ icon: React.ElementType; text: string }>;
  };
}

// El componente se ejecuta como función asincrónica
export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  // Captura el parámetro `name` de la URL
  const { name } = await params;
  console.log(name);
  // Busca el item correspondiente en ReformasData
  const item =
    ReformasData.find((item: ReformaItem) => item.href === name) || null;

  // Renderiza el contenido o muestra un mensaje de error si no hay coincidencias
  if (!item) {
    return (
      <div>
        <h1>Servicio no encontrado</h1>
        <p>El servicio solicitado no está disponible en este momento.</p>
      </div>
    );
  }

  return (
    <>
      <ServicesHeader
        name={item.name}
        description={item.description}
        title={item.title}
        img={item.img}
      />
      <DoForYou
        icons={item.doforyour.icons}
        title={item.doforyour.title}
        name={item.name}
        img={item.img}
      />
      <VentajasSection />
      <EngagementSection name={item.name} />
      <FloatingWhatsAppButton />
      <FAQSectionServices faqData={item.FaqData} />
    </>
  );
}
