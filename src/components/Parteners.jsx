import React from "react";
import brand2 from "../assets/brand-2.png";
import brand5 from "../assets/brand-5.png";
import brand4 from "../assets/brand-4.png";
import brand03 from "../assets/brand03.png";
import brand05 from "../assets/brand05.png";
const Parteners = () => {
  return (
    <div className="flex md:flex-row flex-wrap justify-center items-center gp-[20px] aspect-auto md:justify-between md:w-[80%] w-[100%] px-[5px] m-auto py-[90px]">
      <img src={brand2} alt="" className="w-[200px] h-[70px]" />
      <img src={brand4} alt="" className="w-[200px] h-[70px]" />
      <img src={brand5} alt="" className="w-[200px] h-[70px]" />
      <img src={brand03} alt="" className="w-[200px] h-[70px]" />
      <img src={brand05} alt="" className="w-[200px] h-[70px]" />
    </div>
  );
};

export default Parteners;
