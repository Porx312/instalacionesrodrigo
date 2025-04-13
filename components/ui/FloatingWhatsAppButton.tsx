// FloatingWhatsAppButton.tsx

import { MessageCircle } from "lucide-react"; // Icono de WhatsApp de lucide-react

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+34695866771" // Número de teléfono de WhatsApp, cambia por el tuyo
      target="_blank"
      rel="noopener noreferrer"
      className=" fixed bottom-5 right-2 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWhatsAppButton;
