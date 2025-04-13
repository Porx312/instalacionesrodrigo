import Image from "next/image";

interface ServiceSlideProps {
  title?: string;
  description?: string;
  imgSrc: string;
}

export function ServiceSlide({
  title,
  description,
  imgSrc,
}: ServiceSlideProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
      <Image
        src={imgSrc}
        alt=""
        layout="fill"
        objectFit="cover"
        priority
        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 ease-in-out group-hover:bg-black/70" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <h2 className="mb-2 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mb-4 text-sm leading-relaxed sm:text-base md:text-lg">
          {description}
        </p>
        {title === "" ? (
          ""
        ) : (
          <button className="self-start rounded bg-white px-4 py-2 text-sm font-semibold text-black transition-colors duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            Leer más
          </button>
        )}
      </div>
    </div>
  );
}
