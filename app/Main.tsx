import LocationMap from "@/components/LocationMap";
import AboutSection from "@/components/ui/ComoTrabajamos";
import ComoTrabajamos from "@/components/ui/ComoTrabajamos";
import Experience from "@/components/ui/Experience";
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";
import FormularioAlerta from "@/components/ui/FormularioAlerta";
import ItemServices from "@/components/ui/ItemServices";
import FAQSection from "@/components/ui/PreguntasFaq";
import Services from "@/components/ui/Services";
import Testimonios from "@/components/ui/Testimonios";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className=" flex  flex-col justify-center items-center mx-auto">

      <div className="absolute inset-0 z-0 h-[530px]">
        <Image src={'https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937088/IMG-20250406-WA0014_neiwpl.jpg'} alt={'photo'} layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 bg-slate-950 opacity-80"></div>
      </div>
        <article className=" flex  flex-col items-center justify-between w-full  z-20 relative ">
 
          <div className="space-y-2 pb-8 pt-3 z-10  md:space-y-5  lg:flex-row  max-w-3xl px-2 sm:px-6 xl:max-w-7xl xl:px-0">
            <p className="text-2xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10 md:text-5xl">
              {siteMetadata.description}.
            </p>
          
<p className="text-slate-200">Empresa especializada en electricidad, fontanería, gas y aire acondicionado, que apuesta por la innovación y excelencia para ofrecer soluciones seguras y eficientes en instalaciones y reparaciones. Con un equipo experto y tecnología de vanguardia, mejoramos continuamente nuestro Sistema de Gestión Integral para superar tus expectativas y garantizar tu tranquilidad.</p>

          </div>
        <div className="flex gap-3">
        <FormularioAlerta text="Contactanos" className="" />
          
          <Link href={'/services'} className="border-white border-2 text-white p-2 text-bold">
            Nuestros servicios
          </Link>
        </div>
        </article>
       <AboutSection />

  <div className="flex  flex-col items-center justify-between w-full   relative  py-12 px-4 md:px-6 lg:px-8 z-20 ">
          <ItemServices />
          
        </div> 
    <Experience/>
    {/*  <Testimonios /> */}
   <FAQSection />
        <FloatingWhatsAppButton /> 
        
      </section>

      {/*    {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  );
}
