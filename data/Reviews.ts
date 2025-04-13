interface Reviews {
  name: string;
  avatarUrl: string;
  projectType: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
}

const reviewsData: Reviews[] = [
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2024-10-15",
    name: "Carlos Martínez",
    likes: 45,
    projectType: "Reforma integral de vivienda",
    rating: 5,
    comment:
      "Excelente trabajo. La reforma de mi casa quedó perfecta y superó mis expectativas. El equipo fue muy profesional y puntual en todo momento.",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "2024-09-28",
    name: "Sofía García",
    likes: 39,
    projectType: "Construcción de piscina",
    rating: 4.5,
    comment:
      "La piscina quedó maravillosa, y el proceso fue bastante rápido. Aunque hubo algunos detalles pequeños que se podrían mejorar, el resultado final fue excelente.",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/55.jpg",
    date: "2024-11-10",
    name: "Luis Fernández",
    likes: 29,
    projectType: "Renovación de oficina",
    rating: 3.2,
    comment:
      "Muy buenos profesionales. Renovaron nuestra oficina según lo pactado, aunque hubo un pequeño retraso en la entrega de materiales, todo salió bien al final.",
  },
];

export default reviewsData;
