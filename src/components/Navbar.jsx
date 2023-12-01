// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };

  const [category, setCategory] = useState(false);
  const categoryChange = () => {
    setCategory(!category);
  };

  const [brand, setBrand] = useState(false);
  const brandChange = () => {
    setBrand(!brand);
  };
  return (
    <div>
      <div className="shadow-[10px_10px_20px_rgba(0,0,0,0.24)]">
        <div className="md:mx-[6rem] mx-5 p-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-4">
              <div
                className="space-x-1 p-2 border-[2px] border-grayBackground bg-redColor text-white cursor-pointer hover:bg-blueBackground"
                onClick={categoryChange}
              >
                <span>Danh Mục</span>
                <i className="ri-arrow-down-line"></i>
              </div>
              <div
                className="space-x-1 p-2 border-[2px] border-grayBackground bg-redColor text-white cursor-pointer hover:bg-blueBackground"
                onClick={brandChange}
              >
                <span>Thương Hiệu</span>
                <i className="ri-arrow-down-line"></i>
              </div>
            </div>
            <div className="space-x-4 lg:flex hidden">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                to="/"
                className="cursor-pointer hover:text-redColor transition-all hover:text-xl "
              >
                Home
              </Link>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                to={pageXOffset.jsx}
                className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
              >
                Pages
              </Link>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                to="/"
                className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
              >
                User Account
              </Link>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                to="/"
                className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
              >
                Vendor Account
              </Link>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                to="/"
                className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
              >
                Track My Order
              </Link>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                to="/"
                className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
              >
                Contact
              </Link>
            </div>
            <div className="lg:hidden">
              <i
                className="ri-menu-line cursor-pointer hover:text-redColor"
                onClick={handleChange}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          category ? "translate-y-0" : "hidden"
        } flex flex-col gap-4 p-[1rem] absolute bg-grayBackground z-10 lg:w-[15%] md:mx-[6rem] mx-5 shadow-[20px_20px_20px_rgba(0,0,0,0.24)]`}
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Điện Thoại
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Máy Tính
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Máy Tính Bảng
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Tai Nghe
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Playstation
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Nintendo Switch
        </Link>
      </div>

      <div
        className={`${
          menu ? "translate-y-0" : "hidden"
        } flex flex-col gap-4 lg:hidden mt-4 absolute bg-grayBackground z-10 lg:w-[15%] md:mx-[6rem] mx-5 shadow-[20px_20px_20px_rgba(0,0,0,0.24)]`}
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:text-redColor transition-all hover:text-xl "
        >
          Home
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
        >
          Pages
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
        >
          User Account
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
        >
          Vendor Account
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
        >
          Track My Order
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:text-redColor transition-all hover:text-xl"
        >
          Contact
        </Link>
      </div>
      <div
        className={`${
          brand ? "translate-y-0" : "hidden"
        } flex flex-col gap-4 p-[1rem] absolute bg-grayBackground z-10 lg:w-[15%] md:mx-[15rem] mx-5 shadow-[20px_20px_20px_rgba(0,0,0,0.24)] `}
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Apple
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Samsung
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Logitech
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          MSI
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Asus
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="/"
          className="cursor-pointer hover:bg-redColor hover:p-2 hover:text-white transition-all hover:text-xl "
        >
          Xiaomi
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
