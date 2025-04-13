import SlidesShowTestimonios from "./SlideShow/SlidesShowTestimonios";

const Testimonios = () => {
  return (
    <article className="flex flex-col-reverse my-6 w-full items-center justify-between gap-6 pt-10 lg:flex-row">
      <SlidesShowTestimonios />
      <div className="flex flex-col gap-4 lg:w-[600px]">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-yellow-400 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl">
          Opiniones que inspiran
        </h2>
        <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl">
          Lo que nuestros clientes dicen de nosotros
        </h3>
        <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
          La satisfacción de nuestros clientes es nuestro mayor logro. Con cada
          proyecto, construimos no solo espacios, sino también relaciones
          basadas en confianza y excelencia.
          <strong className="text-yellow-500">
            {" "}
            Sus palabras nos motivan a seguir superándonos.{" "}
          </strong>
          ¡Descubre por qué somos la elección preferida para transformar sueños
          en realidad!
        </p>
      </div>
    </article>
  );
};

export default Testimonios;
