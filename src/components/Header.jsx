// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import Search from "../layouts/Search";

const Header = () => {
  const backgroundColor = "bg-redColor";
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="md:mx-[6rem] mx-5 p-6 flex flex-row justify-between items-center">
        <Link to="/" spy={true} smooth={true} duration={500}>
          <a
            href="/"
            className="font-bold text-[2rem] text-redColor italic cursor-pointer"
          >
            LOGO
          </a>
        </Link>
        <Search />

        <div className="flex flex-row gap-2 lg:gap-8 items-center">
          <i className="ri-user-fill bg-grayBackground rounded-full p-2 text-[1rem] lg:text-xl lg:p-4 hover:bg-blueBackground hover:text-white cursor-pointer hover:shadow-[5px_10px_10px_rgba(0,0,0,0.24)]"></i>
          <div>
            <i className="ri-shopping-cart-fill bg-grayBackground rounded-full p-2 text-[1rem] lg:text-xl lg:p-4 hover:bg-blueBackground hover:text-white cursor-pointer hover:shadow-[5px_10px_10px_rgba(0,0,0,0.24)]"></i>
            <div></div>
          </div>
          <div className="">
            <i
              className="ri-search-fill bg-grayBackground rounded-full p-2 text-[1rem] lg:text-xl lg:p-4 lg:hidden hover:bg-blueBackground hover:text-white cursor-pointer hover:shadow-[5px_10px_10px_rgba(0,0,0,0.24)]"
              onClick={handleChange}
            ></i>
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-y-0" : "hidden"
        } lg:hidden flex items-center gap-2 w-[90%] border-[2px] border-[0_0_0_0.1] rounded-3xl p-[.25rem] mx-5`}
      >
        <i className="ri-search-line text-xl lg:text-2xl cursor-pointer transition-all text-[#ccc]"></i>
        <input
          className="w-full outline-none"
          type="text"
          placeholder="nhập sản phẩm bạn muốn tìm..."
        ></input>
        <Button title="Tìm" backgroundColor={backgroundColor} />
      </div>
    </div>
  );
};

export default Header;
