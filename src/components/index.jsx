// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaBolt } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import {
  FaStarHalfAlt,
  FaCartPlus,
  FaStar,
  FaTruckMoving,
  FaAddressCard,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GrCaretNext } from "react-icons/gr";
import { GiClick } from "react-icons/gi";
import { SlPresent } from "react-icons/sl";

import Button from "../layouts/Button";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/img/flash-1.png";
import img2 from "../assets/img/flash-2.png";
import img3 from "../assets/img/flash-3.png";
import img4 from "../assets/img/flash-4.png";
import img5 from "../assets/img/flash-5.png";

import category1 from "../assets/img/category-1.png";
import category2 from "../assets/img/category-2.png";
import category3 from "../assets/img/category-3.png";

import arrivals1 from "../assets/img/arrivals1.png";
import arrivals2 from "../assets/img/arrivals2.png";
import arrivals3 from "../assets/img/arrivals3.png";
import arrivals4 from "../assets/img/arrivals4.png";
import arrivals5 from "../assets/img/arrivals5.png";
import arrivals6 from "../assets/img/arrivals6.png";
import arrivals7 from "../assets/img/iphone.jpg";

import discount1 from "../assets/img/discount-1.png";
import discount2 from "../assets/img/discount-2.png";
import discount3 from "../assets/img/discount-3.png";
import discount4 from "../assets/img/discount-4.png";
import discount5 from "../assets/img/discount-5.png";
import discount6 from "../assets/img/discount-6.png";
import discount7 from "../assets/img/discount-7.png";
import discount8 from "../assets/img/discount-8.png";
import discount9 from "../assets/img/discount-9.png";

import cat1 from "../assets/img/cat-1.png";
import cat2 from "../assets/img/cat-2.png";

import banner1 from "../assets/img/banner-1.png";
import banner2 from "../assets/img/banner-2.png";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
const index = () => {
  const backgroundColor = "bg-redColor";
  return (
    <div>
      <section className="my-[3rem] lg:my-[5rem] mx-2 lg:mx-0 space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex text-xl lg:text-2xl font-bold gap-2 capitalize">
            <FaBolt className="text-redColor text-3xl" />
            <h2>Flash Deals</h2>
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:gap-4 cursor-pointer transition-all">
            <span>View All</span>
            <GrCaretNext />
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper cursor-grab"
          breakpoints={{
            300: {
              slidesPerView: 2,
              width: 450,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
            },
            1028: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className="mb-4 mr-0">
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] w-[90%] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[4rem] w-[5rem] lg:h-[20rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-2">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="lg:p-3 p-2 bg-redColor rounded-md text-white justify-center flex items-center flex-row gap-2 hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                  <p className="lg:hidden">Buy Now</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-4">
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] w-[90%] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[4rem] w-[5rem] lg:h-[20rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-2">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="lg:p-3 p-2 bg-redColor rounded-md text-white justify-center flex items-center flex-row gap-2 hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                  <p className="lg:hidden">Buy Now</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-4">
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] w-[90%] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[4rem] w-[5rem] lg:h-[20rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-2">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="lg:p-3 p-2 bg-redColor rounded-md text-white justify-center flex items-center flex-row gap-2 hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                  <p className="lg:hidden">Buy Now</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-4">
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] w-[90%] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[4rem] w-[5rem] lg:h-[20rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-2">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="lg:p-3 p-2 bg-redColor rounded-md text-white justify-center flex items-center flex-row gap-2 hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                  <p className="lg:hidden">Buy Now</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-4">
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] w-[90%] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[4rem] w-[5rem] lg:h-[20rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-2">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="lg:p-3 p-2 bg-redColor rounded-md text-white justify-center flex items-center flex-row gap-2 hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                  <p className="lg:hidden">Buy Now</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-4">
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] w-[90%] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[4rem] w-[5rem] lg:h-[20rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-2">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="lg:p-3 p-2 bg-redColor rounded-md text-white justify-center flex items-center flex-row gap-2 hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                  <p className="lg:hidden">Buy Now</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="my-[3rem] lg:my-[5rem] mx-2 lg:mx-0 space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex text-xl lg:text-2xl font-bold gap-2 capitalize">
            <BiCategory className="text-redColor text-3xl" />
            <h2>Top Category</h2>
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:gap-4 cursor-pointer transition-all">
            <span>View All</span>
            <GrCaretNext />
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
              width: 1350,
            },
            768: {
              slidesPerView: 3,
            },
            1028: {
              slidesPerView: 3,
              width: 1350,
            },
          }}
          className="mySwiper cursor-pointer"
        >
          <SwiperSlide className="mb-4">
            <div className="bg-white p-4 flex flex-row items-center rounded-2xl justify-center w-[27rem] shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[20px_10px_10px_rgba(43,52,69,.1)] transition-all">
              <div className="absolute top-6 space-x-32">
                <span className="px-[8px] py-[1px] bg-redColor rounded-2xl text-white capitalize text-[.75rem]">
                  headphone
                </span>
                <span className="px-[10px] py-[1px] bg-blueBackground rounded-2xl text-white capitalize text-[.75rem]">
                  4k orders this week
                </span>
              </div>
              <div className="w-[27rem]">
                <img
                  className="w-[27rem] object-cover rounded-2xl"
                  src={category1}
                  alt="category1"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 flex flex-row items-center rounded-2xl justify-center w-[27rem] shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[20px_10px_10px_rgba(43,52,69,.1)] transition-all">
              <div className="absolute top-6 space-x-32">
                <span className="px-[8px] py-[1px] bg-redColor rounded-2xl text-white capitalize text-[.75rem]">
                  headphone
                </span>
                <span className="px-[10px] py-[1px] bg-blueBackground rounded-2xl text-white capitalize text-[.75rem]">
                  4k orders this week
                </span>
              </div>
              <div className="w-[27rem]">
                <img
                  className="w-[27rem] object-cover rounded-2xl"
                  src={category2}
                  alt="category2"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 flex flex-row items-center rounded-2xl justify-center w-[27rem] shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[20px_10px_10px_rgba(43,52,69,.1)] transition-all">
              <div className="absolute top-6 space-x-32">
                <span className="px-[8px] py-[1px] bg-redColor rounded-2xl text-white capitalize text-[.75rem]">
                  headphone
                </span>
                <span className="px-[10px] py-[1px] bg-blueBackground rounded-2xl text-white capitalize text-[.75rem]">
                  4k orders this week
                </span>
              </div>
              <div className="w-[27rem]">
                <img
                  className="w-[27rem] object-cover rounded-2xl"
                  src={category3}
                  alt="category3"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 flex flex-row items-center rounded-2xl justify-center w-[27rem] shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[20px_10px_10px_rgba(43,52,69,.1)] transition-all">
              <div className="absolute top-6 space-x-32">
                <span className="px-[8px] py-[1px] bg-redColor rounded-2xl text-white capitalize text-[.75rem]">
                  headphone
                </span>
                <span className="px-[10px] py-[1px] bg-blueBackground rounded-2xl text-white capitalize text-[.75rem]">
                  4k orders this week
                </span>
              </div>
              <div className="w-[27rem]">
                <img
                  className="w-[27rem] object-cover rounded-2xl"
                  src={category2}
                  alt="category2"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 flex flex-row items-center rounded-2xl justify-center w-[27rem] shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[20px_10px_10px_rgba(43,52,69,.1)] transition-all">
              <div className="absolute top-6 space-x-32">
                <span className="px-[8px] py-[1px] bg-redColor rounded-2xl text-white capitalize text-[.75rem]">
                  headphone
                </span>
                <span className="px-[10px] py-[1px] bg-blueBackground rounded-2xl text-white capitalize text-[.75rem]">
                  4k orders this week
                </span>
              </div>
              <div className="w-[27rem]">
                <img
                  className="w-[27rem] object-cover rounded-2xl"
                  src={category3}
                  alt="category3"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="my-[3rem] lg:my-[5rem]mx-2 lg:mx-0 space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex text-xl lg:text-2xl font-bold gap-2 capitalize">
            <MdProductionQuantityLimits className="text-redColor text-3xl" />
            <h2>New Arrivals</h2>
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:gap-4 cursor-pointer transition-all">
            <span>View All</span>
            <GrCaretNext />
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1028: {
              slidesPerView: 3,
              width: 800,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="mb-4">
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[13rem] object-cover"
                src={arrivals1}
                alt="arrivals1"
              />
              <div className="flex flex-row justify-between">
                <h3 className=" font-bold">Sunglass</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">150</span>
                  <GiClick />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[13rem] object-cover"
                src={arrivals2}
                alt="arrivals2"
              />
              <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold">Makeup</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">250</span>
                  <GiClick />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[13rem] object-cover"
                src={arrivals3}
                alt="arrivals3"
              />
              <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold">Smart Watch</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">50</span>
                  <GiClick />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[13rem] object-cover"
                src={arrivals4}
                alt="arrivals4"
              />
              <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold">Lipstick</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">250</span>
                  <GiClick />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[13rem] object-cover"
                src={arrivals5}
                alt="arrivals5"
              />
              <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold">Green Plant</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">300</span>
                  <GiClick />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[13rem] object-cover"
                src={arrivals6}
                alt="arrivals6"
              />
              <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold">Bonsai</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">450</span>
                  <GiClick />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[13rem] object-cover"
                src={arrivals7}
                alt="arrivals7"
              />
              <div className="flex flex-row justify-between capitalize">
                <h3 className="text-xl font-bold">smartphone</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">1000</span>
                  <GiClick />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="my-[3rem] lg:my-[5rem] mx-2 lg:mx-0 space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex text-xl lg:text-2xl font-bold gap-2 capitalize">
            <SlPresent className="text-redColor text-3xl" />
            <h2>big discounts</h2>
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:gap-4 cursor-pointer transition-all">
            <span>View All</span>
            <GrCaretNext />
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1028: {
              slidesPerView: 3,
              width: 1000,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="mb-4">
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[20rem] object-cover mx-auto"
                src={discount1}
                alt="discount1"
              />
              <div className="flex flex-row justify-between">
                <h3 className=" font-bold">RG products</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">$200</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[20rem] object-cover mx-auto"
                src={discount2}
                alt="discount2"
              />
              <div className="flex flex-row justify-between">
                <h3 className=" font-bold">Ranasonic 2022</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">$300</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[20rem] object-cover mx-auto"
                src={discount3}
                alt="discount3"
              />
              <div className="flex flex-row justify-between">
                <h3 className=" font-bold">Pune HD</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">$30</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[20rem] object-cover mx-auto"
                src={discount4}
                alt="discount4"
              />
              <div className="flex flex-row justify-between">
                <h3 className=" font-bold">Sony CCTV</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">$80</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[20rem] object-cover mx-auto"
                src={discount5}
                alt="discount5"
              />
              <div className="flex flex-row justify-between">
                <h3 className=" font-bold">BenuX 2022</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">$250</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[20rem] object-cover mx-auto"
                src={discount6}
                alt="discount6"
              />
              <div className="flex flex-row justify-between">
                <h3 className=" font-bold">Sony TV 1080p</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">$450</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[20rem] object-cover mx-auto"
                src={discount7}
                alt="discount7"
              />
              <div className="flex flex-row justify-between">
                <h3 className="font-bold">Sony PS4</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">$250</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[20rem] object-cover mx-auto"
                src={discount8}
                alt="discount8"
              />
              <div className="flex flex-row justify-between">
                <h3 className=" font-bold">Setgearr 2022</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">$100</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-white p-4 rounded-2xl gap-3 shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[15px_10px_10px_rgba(43,52,69,.1)] transition-all cursor-pointer">
              <img
                className="rounded-2xl w-[20rem] object-cover mx-auto"
                src={discount9}
                alt="discount9"
              />
              <div className="flex flex-row justify-between">
                <h3 className=" font-bold">Tony BGB</h3>
                <div className="flex flex-row items-center gap-2 text-gray-400 font-semibold">
                  <span className="">$25</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="my-[3rem] lg:my-[5rem]mx-2 lg:mx-0  flex flex-row gap-8">
        <div className="bg-white p-8 space-y-6 shadow-[5px_5px_5px_rgba(43,52,69,.1)] w-[25%] h-full hidden lg:flex flex-col">
          <div className="flex gap-4 justify-between">
            <span className="text-xl lg:text-2xl font-bold ">Brands</span>
            <div className="border-l-[2px] border-gray-400 "></div>
            <span className="flex items-center text-[1rem] text-gray-500 font-semibold lg:text-xl">
              Shops
            </span>
          </div>
          <div className="space-y-8">
            <div className="flex flex-row items-center hover:shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:px-[10px] hover:py[1px] cursor-pointer transition-all">
              <img
                className="h-[1.5rem] w-auto object-cover"
                src={cat1}
                alt="cat1"
              />
              <div className="px-4 py-2 flex flex-row">
                <p className="text-xl font-medium">Apple</p>
              </div>
            </div>

            <div className="flex flex-row items-center hover:shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:px-[10px] hover:py[1px] cursor-pointer transition-all">
              <img
                className="h-[1.5rem] w-auto object-cover"
                src={cat2}
                alt="cat2"
              />
              <div className="px-4 py-2 flex flex-row">
                <p className="text-xl font-medium">Samasung</p>
              </div>
            </div>
            <div className="flex flex-row items-center hover:shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:px-[10px] hover:py[1px] cursor-pointer transition-all">
              <img
                className="h-[1.5rem] w-auto object-cover"
                src={cat1}
                alt="cat1"
              />
              <div className="px-4 py-2 flex flex-row">
                <p className="text-xl font-medium">Oppo</p>
              </div>
            </div>
            <div className="flex flex-row items-center hover:shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:px-[10px] hover:py[1px] cursor-pointer transition-all">
              <img
                className="h-[1.5rem] w-auto object-cover"
                src={cat2}
                alt="cat2"
              />
              <div className="px-4 py-2 flex flex-row">
                <p className="text-xl font-medium">Vivo</p>
              </div>
            </div>
            <div className="flex flex-row items-center hover:shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:px-[10px] hover:py[1px] cursor-pointer transition-all">
              <img
                className="h-[1.5rem] w-auto object-cover"
                src={cat1}
                alt="cat1"
              />
              <div className="px-4 py-2 flex flex-row">
                <p className="text-xl font-medium">Sony</p>
              </div>
            </div>
          </div>

          <Button
            title="View Alll"
            className=""
            backgroundColor={backgroundColor}
          />
        </div>
        <div className="flex flex-col w-full lg:w-[75%]">
          <div className="flex justify-between ">
            <div className="flex j text-xl lg:text-2xl font-bold gap-2 capitalize">
              <SlPresent className="text-redColor text-3xl" />
              <h2>Products</h2>
            </div>
            <div className="flex items-center gap-2 text-gray-400 hover:gap-4 cursor-pointer transition-all">
              <span>View All</span>
              <GrCaretNext />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[5rem] w-[20rem] lg:h-[10rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="p-3 bg-redColor rounded-md text-white flex items-center hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                </div>
              </div>
            </div>
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[5rem] w-[20rem] lg:h-[10rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="p-3 bg-redColor rounded-md text-white flex items-center hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                </div>
              </div>
            </div>
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[5rem] w-[20rem] lg:h-[10rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="p-3 bg-redColor rounded-md text-white flex items-center hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                </div>
              </div>
            </div>
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[5rem] w-[20rem] lg:h-[10rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="p-3 bg-redColor rounded-md text-white flex items-center hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                </div>
              </div>
            </div>
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[5rem] w-[20rem] lg:h-[10rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="p-3 bg-redColor rounded-md text-white flex items-center hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                </div>
              </div>
            </div>
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[5rem] w-[20rem] lg:h-[10rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="p-3 bg-redColor rounded-md text-white flex items-center hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                </div>
              </div>
            </div>
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[5rem] w-[20rem] lg:h-[10rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="p-3 bg-redColor rounded-md text-white flex items-center hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                </div>
              </div>
            </div>
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[5rem] w-[20rem] lg:h-[10rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="p-3 bg-redColor rounded-md text-white flex items-center hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                </div>
              </div>
            </div>
            <div className="space-y-4 p-3 border-none border-gray-400 rounded-xl bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)] hover:shadow-[10px_10px_10px_rgba(43,52,69,.1)] lg:w-full group transition-all">
              <div>
                <div className="flex justify-between ">
                  <span className="px-2 h-6 lg:px-3 lg:h-7 bg-redColor rounded-full text-white flex items-center text-[.75rem] ">
                    50% Off
                  </span>
                  <div className="opacity-0 flex flex-col items-center gap-2 group-hover:opacity-100 hover:cursor-pointer">
                    <span className="bg-blueBackground py-[1px] px-[10px] text-white rounded-[50px]">
                      0
                    </span>
                    <CiHeart className="font-semibold text-2xl" />
                  </div>
                </div>
                <img
                  className="mx-auto h-[5rem] w-[20rem] lg:h-[10rem] lg:w-[20rem] object-cover"
                  src={img5}
                  alt="img5"
                />
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="space-y-3">
                  <p className="font-semibold">Nike Air Max Pulse Roam</p>
                  <div className="flex flex-row text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    <FaStarHalfAlt />
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-[.8rem] text-gray-400 line-through">
                      100$
                    </span>
                    <p className="font-semibold text-xl">90$</p>
                  </div>
                </div>
                <div className="p-3 bg-redColor rounded-md text-white flex items-center hover:text-xl hover:bg-blueBackground cursor-pointer">
                  <FaCartPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[3rem] lg:my-[5rem] mx-2 lg:mx-0 gap-6 flex flex-col lg:flex-row">
        <img className="lg:w-[30%]" src={banner1} alt="banner1" />
        <img className="lg:w-[70%]" src={banner2} alt="banner2" />
      </section>
      <section className="my-[3rem] lg:my-[5rem] mx-2 lg:mx-0 gap-6 grid grid-cols-1 lg:grid-cols-4">
        <div className="p-8 flex flex-col items-center justify-center gap-3 bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)]">
          <div className="text-[2rem] p-6 rounded-full bg-gray-200 ">
            <FaTruckMoving />
          </div>
          <h3 className="text-xl font-medium">Worldwide Delivery</h3>
          <p className="text-center text-gray-400">
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
        <div className="p-8 flex flex-col items-center justify-center gap-3 bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)]">
          <div className="text-[2rem] p-6 rounded-full bg-gray-200 ">
            <FaAddressCard />
          </div>
          <h3 className="text-xl font-medium">Worldwide Delivery</h3>
          <p className="text-center text-gray-400">
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
        <div className="p-8 flex flex-col items-center justify-center gap-3 bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)]">
          <div className="text-[2rem] p-6 rounded-full bg-gray-200 ">
            <FaShieldAlt />
          </div>
          <h3 className="text-xl font-medium">Worldwide Delivery</h3>
          <p className="text-center text-gray-400">
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
        <div className="p-8 flex flex-col items-center justify-center gap-3 bg-white shadow-[5px_5px_5px_rgba(43,52,69,.1)]">
          <div className="text-[2rem] p-6 rounded-full bg-gray-200 ">
            <FaHeadset />
          </div>
          <h3 className="text-xl font-medium">Worldwide Delivery</h3>
          <p className="text-center text-gray-400">
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
      </section>
    </div>
  );
};

export default index;
