import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import topProduct1 from "../assets/top-product-1.png";
import topProduct2 from "../assets/top-product-2.png";
import topProduct3 from "../assets/top-product-3.png";
import topProduct4 from "../assets/top-product-4.png";

import Card from "./card/Card";

const productList = [
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
    category: "t-shirt",
    counter: 0,
  },

  {
    id: 3,
    img: topProduct3,
    title: "Geometric print Scarf",
    price: 53.0,
    category: "jacket",
    counter: 0,
  },

  {
    id: 4,
    img: topProduct4,
    title: "Yellow Reserved Hoodie",
    price: 364.0,
    category: "hoodies",
    discount: 155.0,
    counter: 0,
  },
];

const Bestseller = () => {
  const [filteredproduct, setFilteredProduct] = useState([]);
  const [isFiltering, setIsFiltering] = useState("ALL");

  const handleProduct = (e) => {
    let tag_Name = e.target.innerText;

    setIsFiltering(tag_Name);
    let result = productList.filter((prod) => prod.category === tag_Name);
    setIsFiltering(tag_Name);
    setFilteredProduct(result);
  };

  return (
    <div className="md:w-[80%] w-[100%] px-[20px] md:px-0 m-auto ">
      <h1 className="mt-[104px] mb-[35px] text-[50px] leading-[59px] font-[500] text-center">
        Best sellers
      </h1>
      <div className="flex">
        <div className="flex-1 flex gap-4 flex-row justify-start items-center">
          <span onClick={handleProduct} className=" cursor-pointer">
            ALL
          </span>
          <ul className="flex flex-row gap-4 cursor-pointer text-black/50">
            <li onClick={handleProduct}>t-shirt</li>
            <li onClick={handleProduct}>hoodies</li>
            <li onClick={handleProduct}>jacket</li>
          </ul>
        </div>
        <button className="flex bg-[#1E2832] py-[5px] px-[15px] items-center text-white gap-2">
          <BiFilter />
          filter
        </button>
      </div>
      <div className="flex  justify-center flex-row flex-wrap md:justify-start gap-[25px] my-[35px]  ">
        {isFiltering !== "ALL"
          ? filteredproduct.map((product, index) => (
              <Card key={index} product={product} />
            ))
          : productList.map((product, index) => (
              <Card key={index} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Bestseller;
