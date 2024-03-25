import React from "react";

function Item({ svg: SvgComponent, text }) {
  return (
    <div className="p-[12px] hover:bg-[#181919] duration-100 rounded-full flex items-center cursor-pointer">
      <SvgComponent></SvgComponent>
      <p className="text-[20px] ml-[18px]">{text}</p>
    </div>
  );
}

export default Item;
