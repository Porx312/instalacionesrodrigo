interface Service {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
}

const servicesData: Service[] = [
  {
    title: "Reformas Integrales",
    description:
      "Transformamos completamente tu espacio con soluciones personalizadas y de alta calidad.",
    imgSrc: "/static/images/reformas/reformas2.jpg",
    href: "/servicios/reforma-integral",
  },
  {
    title: "Cocinas Modernas",
    description:
      "Diseñamos y renovamos cocinas funcionales y estéticamente atractivas para tu hogar.",
    imgSrc: "/static/images/reformas/reformas1.jpg",
    href: "/servicios/cocinas-modernas",
  },
  {
    title: "Baños de Lujo",
    description:
      "Creamos espacios de baño elegantes y relajantes con los mejores materiales y acabados.",
    imgSrc: "/static/images/reformas/reformas3.jpg",
    href: "/servicios/banos-de-lujo",
  },
];

export default servicesData;
