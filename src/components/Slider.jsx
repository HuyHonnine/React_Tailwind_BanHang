// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../layouts/Button";

import slide1 from "../assets/img/slide-2.png";
import slide2 from "../assets/img/slide-2.png";
import slide3 from "../assets/img/slide-3.png";
import slide4 from "../assets/img/slide-4.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const backgroundColor = "bg-redColor";
  return (
    <section className="min-h-full  lg:flex flex-row items-center bg-white shadow-[0_4px_16px_rgba(43,52,69,.1)]">
      <div className="w-full hidden lg:flex flex-col space-y-3 shadow-[0_4px_16px_rgba(43,52,69,.1)] rounded-[.5rem]">
        <div className="p-3 space-x-2 cursor-pointer hover:bg-redColor hover:text-white transition-all">
          <i className="ri-smartphone-line"></i>
          <span>Sản Phẩm Điện Thoại</span>
        </div>
        <div className="p-3 space-x-2 cursor-pointer hover:bg-redColor hover:text-white transition-all">
          <i className="ri-macbook-line"></i>
          <span>Sản Phẩm LapTop</span>
        </div>
        <div className="p-3 space-x-2 cursor-pointer hover:bg-redColor hover:text-white transition-all">
          <i className="ri-computer-line"></i>
          <span>Linh Kiện Máy Tính</span>
        </div>
        <div className="p-3 space-x-2 cursor-pointer hover:bg-redColor hover:text-white transition-all">
          <i className="ri-building-line"></i>
          <span>Phụ Kiện chung</span>
        </div>
        <div className="p-3 space-x-2 cursor-pointer hover:bg-redColor hover:text-white transition-all">
          <i className="ri-headphone-line"></i>
          <span>Thiết Bị Âm Thanh</span>
        </div>
        <div className="p-3 space-x-2 cursor-pointer hover:bg-redColor hover:text-white transition-all">
          <i className="ri-robot-2-line"></i>
          <span>Thiết Bị Thông Minh</span>
        </div>
        <div className="p-3 space-x-2 cursor-pointer hover:bg-redColor hover:text-white transition-all">
          <i className="ri-stock-line"></i>
          <span>Thiết Bị Văn Phòng</span>
        </div>
      </div>
      <div></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          300: {
            padding: 10,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="p-[.5rem]">
          <div className="flex flex-row items-center justify-around">
            <div className="w-[40%] space-y-7">
              <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold">
                50% Off For Your First Shopping
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                lobortis consequat eu, quam etiam at quis ut convallis.
              </p>
              <Button title="Xem Chi Tiết" backgroundColor={backgroundColor} />
            </div>
            <div className="w-[30%]">
              <img
                className="h-full w-[20rem] object-cover"
                src={slide1}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-[.5rem]">
          <div className="flex flex-row items-center justify-around">
            <div className="w-[40%] space-y-7">
              <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold">
                50% Off For Your First Shopping
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                lobortis consequat eu, quam etiam at quis ut convallis.
              </p>
              <Button title="Xem Chi Tiết" backgroundColor={backgroundColor} />
            </div>
            <div className="w-[30%]">
              <img
                className="h-full w-[20rem] object-cover"
                src={slide2}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-[.5rem]">
          <div className="flex flex-row items-center justify-around">
            <div className="w-[40%] space-y-7">
              <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold">
                50% Off For Your First Shopping
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                lobortis consequat eu, quam etiam at quis ut convallis.
              </p>
              <Button title="Xem Chi Tiết" backgroundColor={backgroundColor} />
            </div>
            <div className="w-[30%]">
              <img
                className="h-full w-[20rem] object-cover"
                src={slide3}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-[.5rem]">
          <div className="flex flex-row items-center justify-around">
            <div className="w-[40%] space-y-7">
              <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-bold">
                50% Off For Your First Shopping
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                lobortis consequat eu, quam etiam at quis ut convallis.
              </p>
              <Button title="Xem Chi Tiết" backgroundColor={backgroundColor} />
            </div>
            <div className="w-[30%]">
              <img
                className="h-full w-20rem] object-cover"
                src={slide4}
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
