"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { ServiceSlide } from "./ServiceSlide";

interface Service {
  title: string;
  description: string;
  imgSrc: string;
}

interface ServicesSliderProps {
  services: Service[];
}

export function ServicesSlider({ services }: ServicesSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" h-[300px] w-full overflow-hidden rounded-lg lg:w-[500px]">
      <Swiper
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            } w-3 h-3 rounded-full mx-1"></span>`;
          },
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="group">
            <ServiceSlide {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 transform">
        <span className="sr-only">
          Diapositiva {activeIndex + 1} de {services.length}
        </span>
      </div>
    </div>
  );
}
