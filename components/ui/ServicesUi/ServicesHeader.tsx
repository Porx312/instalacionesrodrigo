import Image from "next/image";
import React from "react";
import FormularioAlerta from "../FormularioAlerta";
interface Props {
  title: string;
  description: string;
  name: string;
  img: string;
}
const ServicesHeader = ({ title, description, name, img }: Props) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image src={img} alt={name} layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 pt-16 pb-32 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            {description}
          </p>
          <div className="text-center">
            <FormularioAlerta
              text={`Solicitar ${name}!`}
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              reforma={name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
