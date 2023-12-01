// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="my-[5rem] mx-2 lg:mx-0 gap-5 flex flex-col lg:flex-row ">
      <div className="space-y-2 w-full lg:w-1/4 flex flex-col">
        <h1 className="font-bold text-[2rem] text-redColor italic cursor-pointer">
          LOGO
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
          id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
          vel ut sollicitudin elit at amet.
        </p>
        <div className="flex flex-row gap-8">
          <div className="p-4 text-white space-x-2 flex flex-row items-center bg-[#0c2a4d] rounded-lg cursor-pointer transition-all hover:bg-redColor">
            <FaFacebook />
            <p>Facebook</p>
          </div>
          <div className="p-4 text-white space-x-2 flex flex-row items-center bg-[#0c2a4d] rounded-lg cursor-pointer transition-all hover:bg-redColor">
            <AiFillInstagram />
            <p>Isntagram</p>
          </div>
        </div>
      </div>
      <div className="space-y-2 w-1/4 flex flex-row lg:flex-col lg:space-x-0 space-x-10 item">
        <h1 className="text-[1.5rem] text-white font-semibold">About Us</h1>
        <div className="flex flex-col gap-2 text-gray-400">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            Careers
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            Our Stores
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            Our Cares
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="space-y-2 w-1/4 flex flex-row lg:flex-col lg:space-x-0 space-x-10 item">
        <h1 className="text-[1.5rem] text-white font-semibold">
          Customer Care
        </h1>
        <div className="flex flex-col gap-2 text-gray-400">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            Help Center
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            How to Buy
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            Track Your Order
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            Corporate & Bulk Purchasing
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:cursor-pointer hover:ml-2 transition-all"
          >
            {" "}
            Returns & Refunds
          </Link>
        </div>
      </div>
      <div className="space-y-2 w-1/4 flex flex-row lg:flex-col lg:space-x-0 space-x-10 item">
        <h1 className="text-[1.5rem] text-white font-semibold">Contact Us</h1>
        <p className="text-gray-400">
          70 Washington Square South, New York, NY 10012, United States
        </p>
        <p className="text-gray-500 hover:text-redColor cursor-pointer">
          Email: uilib.help@gmail.com
        </p>
        <p className="text-gray-500 hover:text-redColor cursor-pointer">
          Phone: +1 1123 456 780
        </p>
      </div>
    </div>
  );
};

export default Footer;
