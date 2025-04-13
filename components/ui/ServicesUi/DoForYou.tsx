import Image from "next/image";
import FormularioAlerta from "../FormularioAlerta";
interface Props {
  title: string;
  icons: { icon: React.ElementType; text: string }[];
  name: string;
  img: string;
}
export default function DoForYou({ title, icons, name, img }: Props) {
  return (
    <section className="py-16 bg ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Lo Que Hacemos por Ti
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <ul className="space-y-4">
              {icons.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0">
                    <item.icon />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <FormularioAlerta
                reforma={name}
                text="Solicita Tu Presupuesto gratis"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              ></FormularioAlerta>
            </div>
          </div>
          <div className="relative h-96 md:h-full">
            <Image
              src={img}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-yellow-500 opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
