import React from "react";
import { BiFilter } from "react-icons/bi";
import topProduct1 from "../assets/top-product-1.png";
import topProduct2 from "../assets/top-product-2.png";
import topProduct3 from "../assets/top-product-3.png";
import topProduct4 from "../assets/top-product-4.png";
import topProduct5 from "../assets/top-product-5.png";
import topProduct6 from "../assets/top-product.png";
import Card from "./card/Card";

const product = [
  {
    id: 1,
    img: topProduct1,
    title: "Adicolor Classics Joggers",
    price: 63.85,
    category: "Dress",
    counter: 0,
  },

  {
    id: 2,
    img: topProduct2,
    title: "Nike Sportswear Futura Luxe",
    price: 130.0,
    category: "Bag",
    counter: 0,
  },

  {
    id: 3,
    img: topProduct3,
    title: "Geometric print Scarf",
    price: 53.0,
    category: "scarf",
    counter: 0,
  },

  {
    id: 4,
    img: topProduct4,
    title: "Yellow Reserved Hoodie",
    price: 364.0,
    category: "Dress",
    discount: 155.0,
    counter: 0,
  },

  {
    id: 5,
    img: topProduct5,
    title: "Basic Dress Green",
    price: 236.0,
    category: "Dress",
    counter: 0,
  },

  {
    id: 6,
    img: topProduct6,
    title: "Nike Air Zoom Pegasus",
    price: 220.0,
    category: "shoe",
    discount: 198.0,
    counter: 0,
  },
];

const Items = () => {
  return (
    <div className="md:w-[80%] w-[100%] px-[20px] md:px-0 m-auto ">
      <h1 className="mt-[104px] mb-[35px] text-[50px] leading-[59px] font-[500] text-center">
        Or subscribe to the newsletter
      </h1>
      <div className="flex">
        <div className="flex-1 flex gap-4 flex-row justify-start items-center">
          <span>all products</span>
          <ul className="flex flex-row gap-4 cursor-pointer text-black/50">
            <li>t-shirt</li>
            <li>hoodies</li>
            <li>jacket</li>
          </ul>
        </div>
        <button className="flex bg-[#1E2832] py-[5px] px-[15px] items-center text-white gap-2">
          <BiFilter />
          filter
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-[25px] my-[35px]  ">
        {product.map((product, index) => (
          <Card key={`product-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Items;
