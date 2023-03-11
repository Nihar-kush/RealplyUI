import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Testimonials() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden animate-fade-in-up">
      <div className="flex flex-col justify-center w-[80%] h-[80%] gap-1 p-2">
        <h1 className="text-[#070708] text-4xl font-bold text-center">
          Loved by the world's best
        </h1>
        <div className="w-full h-[80%]">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <TestimonialCard
                statement="Really good software that works amazingly well. The videos are
          helpful. I think it takes a little getting used to but works really
          well and I'm growing my connections on LinkedIn in a very targeted way
          day by day. Thanks for this!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard statement="An essential tool for anyone with a LinkedIn Premium account who is serious about building their business. I would thoroughly recommend it. The cost is minimal to the level of business it can generate or provide." />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard statement="Fantastic tool for LinkedIn! Makes messaging and new connections so much faster and easier, plus it's simple to use. Still getting my head around setting up the funnels but the videos are very helpful. Highly recommend." />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                statement="Really good software that works amazingly well. The videos are
          helpful. I think it takes a little getting used to but works really
          well and I'm growing my connections on LinkedIn in a very targeted way
          day by day. Thanks for this!"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
