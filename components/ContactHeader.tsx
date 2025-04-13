import { Phone } from "lucide-react";
import React from "react";

const ContactHeader = () => {
  return (
    <div className="flex justify-between w-full p-2  text-white">
      <div className="">
        <h2 className="font-bold text-white">RODRIGO INSTALACIONES S.L</h2>
      </div>
      <div className="flex gap-2">
        <a href="tel:667297405" className="flex items-center gap-1 text-white">
          <Phone className="w-4 h-4 " />
          <h2>667297405</h2>
        </a>
        <a href="tel:667297405" className="flex items-center gap-1 text-white">
          <Phone className="w-4 h-4 " />
          <h2>667297405</h2>
        </a>
      </div>
    </div>
  );
};

export default ContactHeader;
