import Gallery from "@/components/Gallery";

const galleryItems = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937088/IMG-20250406-WA0014_neiwpl.jpg",
    alt: "",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937085/IMG-20250406-WA0002_esuyov.jpg",
    alt: "",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937088/IMG-20250406-WA0016_zz2wqf.jpg",
    alt: "",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937088/IMG-20250406-WA0012_xivubh.jpg",
    alt: "",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937088/IMG-20250406-WA0011_v7svpn.jpg",
    alt: "",
  },
  {
    id: "6",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937087/IMG-20250406-WA0010_qlusq3.jpg",
    alt: "",
  },
  {
    id: "7",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937087/IMG-20250406-WA0007_sq4l68.jpg",
    alt: "",
  },
  {
    id: "8",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937087/IMG-20250406-WA0009_glsc0j.jpg",
    alt: "",
  },
  {
    id: "9",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937087/IMG-20250406-WA0008_ot8iek.jpg",
    alt: "",
  },
  {
    id: "10",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937086/IMG-20250406-WA0022_wu9cj1.jpg",
    alt: "",
  },
  {
    id: "11",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937085/IMG-20250406-WA0018_bzonse.jpg",
    alt: "",
  },
  {
    id: "12",
    src: "https://res.cloudinary.com/dvqgkdvgg/image/upload/v1743937085/IMG-20250406-WA0017_rrknwl.jpg",
    alt: "",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Gallery items={galleryItems} />
    </main>
  );
}
