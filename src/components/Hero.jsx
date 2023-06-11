import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import imageProduct from "../assets/image-product.png";
import frame from "../assets/Frame.png";
import frame1 from "../assets/Frame1.png";
const Hero = () => {
  return (
    <div className="bg-slate-200 ">
      <div className="flex justify-center  p-[30px] md:w-[80%] w-[100%] m-auto  ">
        <div className="flex-1  flex justify-center flex-col ">
          <h1 className="md:text-[74px] text-[54px] ">Collections</h1>
          <p className="my-[20px]">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="bg-[#1E2832] w-max box-content flex items-center py-[19px] px-[26px] text-white gap-[15px]">
            <BiShoppingBag /> shop now
          </button>
        </div>
        <div className="flex-1 md:flex hidden justify-center">
          <img src={imageProduct} alt="" />
        </div>
      </div>
      <div className="md:flex justify-between hidden w-full">
        <img
          src={frame1}
          alt=""
          className="w-[132.34px] h-[66.61px] absolute bottom-[25px]"
        />
        <img
          src={frame}
          alt=""
          className="w-[195px] h-[262px] absolute bottom-[50px] right-0"
        />
      </div>
    </div>
  );
};

export default Hero;
