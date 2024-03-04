import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AutoSwiper({ items }) {
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="mt-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}>
        {items &&
          items !== undefined &&
          items.map((item) => (
            <SwiperSlide
              key={item.id}
              className="relative swiper-slide-custom flex items-center justify-center py-3">
              <div className="w-full h-[600px] lg:h-[400px] flex lg:flex-row flex-col text-center justify-center items-center">
                <img
                  className="sm:w-1/2 h-[300px] lg:h-full  mb-4"
                  src={item.image}
                  alt="Offer"
                />

                <div>
                  <h1 className="text-lg font-semibold mb-2 mt-8">
                    {item.title}
                  </h1>
                  <p className="text-sm">
                    {item.description.substring(0, 70)}...
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center">
          <span ref={progressContent} className="text-white text-sm"></span>
        </div>
      </Swiper>
    </div>
  );
}
