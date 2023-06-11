import React from "react";
import Subscribe from "./Subscribe";
import card1 from "../assets/discount/card-1.png";
import card2 from "../assets/discount/card-2.png";
import card3 from "../assets/discount/card-3.png";
import card4 from "../assets/discount/card-4.png";
import card5 from "../assets/discount/card-5.png";
import card6 from "../assets/discount/card.png";
const Discount = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[100px] bg-gray-100">
      <h1 className=" text-[50px] leading-[59px] font-[500] text-center">
        Follow products and discounts on Instagram
      </h1>
      <div className="w-[80%] m-auto flex flex-row flex-wrap pt-[60px] mb-[70px] justify-between ">
        <img src={card6} alt="" className="w-[15%]" />
        <img src={card1} alt="" className="w-[15%]" />
        <img src={card2} alt="" className="w-[15%]" />
        <img src={card3} alt="" className="w-[15%]" />
        <img src={card4} alt="" className="w-[15%]" />
        <img src={card5} alt="" className="w-[15%]" />
      </div>
      <Subscribe />
    </div>
  );
};

export default Discount;
