// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";

const Head = () => {
  return (
    <div className="min-h-full bg-blueBackground ">
      <div className="hidden lg:flex items-center justify-between p-2 text-white md:mx-[6rem] mx-5">
        <div className="flex gap-8">
          <div className="space-x-1">
            <i className="ri-phone-fill font-medium"></i>
            <span>+1223412312</span>
          </div>
          <div className="space-x-1">
            <i className="ri-mail-fill font-medium"></i>
            <span>hohuy12344@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Link spy={true} smooth={true} duration={500} to="/">
            <span className="">Theme FAQs</span>
          </Link>
          <Link spy={true} smooth={true} duration={500} to="/">
            <span className="">Need Helps</span>
          </Link>
          <div className="space-x-1">
            <i className="ri-global-fill"></i>

            <Link spy={true} smooth={true} duration={500} to="/">
              <span className="">EN</span>
            </Link>
          </div>

          <div className="space-x-1">
            <i className="ri-global-fill"></i>
            <Link spy={true} smooth={true} duration={500} to="/">
              <span className="">USA</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
