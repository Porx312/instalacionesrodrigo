"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slideshow.css";
import ReviewCard from "../Review";
import reviewsData from "@/data/Reviews";

// import required modules

export default function SlidesShowTestimonios() {
  return (
    <div className=" h-[300px]  w-full   overflow-hidden  rounded-lg lg:w-[500px]">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2 "
      >
        {reviewsData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative flex   cursor-pointer items-center "
          >
            <ReviewCard
              avatarUrl={item.avatarUrl}
              comment={item.comment}
              name={item.name}
              projectType={item.projectType}
              rating={item.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
