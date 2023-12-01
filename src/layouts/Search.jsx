// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "../layouts/Button";
const Search = () => {
  const backgroundColor = "bg-redColor";
  const [searchItem, setSearchItem] = useState("");

  const handleSearchInput = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchItem);
    if (!searchItem.isBlank()) {
    } else {
      console.log("Vui lòng tìm kiếm một sản phẩm nào đó");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden lg:flex items-center gap-2 w-[50%] border-[2px] border-[0_0_0_0.1] rounded-3xl p-2"
    >
      <i className="ri-search-line text-xl lg:text-2xl cursor-pointer transition-all text-[#ccc]"></i>
      <input
        onChange={handleSearchInput}
        className="w-[100%] outline-none"
        type="text"
        placeholder="Nhập sản phẩm bạn muốn tìm kiếm..."
      ></input>
      <Button title="Tìm" backgroundColor={backgroundColor} />
    </form>
  );
};

export default Search;
