import React from "react";
import maincard from "../assets/maincard.png";
import topproduct1 from "../assets/card-1.png";
import topproduct2 from "../assets/card-2.png";
import topproduct3 from "../assets/card.png";
import topproduct5 from "../assets/item-category-2.png";
const Popular = () => {
  return (
    <div className="md:flex flex-row md:w-[80%] w-[100%] px-[20px] m-auto gap-[24px]">
      <div className="flex-1 relative">
        <h1 className=" md:-rotate-90 md:absolute bottom-[48%] left-[-48%] text-[34px] font-[400]">
          Explore new and popular styles
        </h1>
        <img src={maincard} alt="" className="w-full" />
      </div>
      <div className="flex-1 flex flex-row justify-between gap-[10px] mt-[20px] flex-wrap box__img ">
        <img src={topproduct1} alt="" className="md:w-[48%] w-[48%] h-auto" />
        <img src={topproduct2} alt="" className="md:w-[48%] w-[48%] h-auto" />
        <img src={topproduct3} alt="" className="md:w-[48%] w-[48%] h-auto" />
        <img src={topproduct5} alt="" className="md:w-[48%] w-[48%] h-auto" />
      </div>
    </div>
  );
};

export default Popular;
