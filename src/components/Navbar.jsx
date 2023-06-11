import React, { useState } from "react";
import { BiMenu, BiSearch, BiShoppingBag, BiUser, BiX } from "react-icons/bi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = ({ cart, isToogled, setIsToggled }) => {
  // const [counter, setCounter] = useState(0);
  const [phoneNav, setPhoneNav] = useState(false);
  const handlePhoneNav = () => {
    setPhoneNav((phoneNav) => setPhoneNav(!phoneNav));
  };
  const handleShowCart = () => {
    if (!isToogled) {
      setIsToggled(true);
    }
  };
  return (
    <div className="flex flex-col md:w-[80%] w-[100%] m-auto">
      <div className="flex-1 flex flex-col  items-center w-[100%] p-[15px] md:hidden">
        <Link to="/">
          <img src={logo} alt="" className="w-[180px] h-[34px]" />
        </Link>
        <div className="flex flex-row justify-between w-[100%] p-[15px]">
          <BiSearch className="w-[25px] h-[25px]" />
          <div className="flex flex-row  gap-[25px]">
            <span className="flex flex-row items-center">
              <BiUser className="mr-[5px]" />
              Account
            </span>
            <span
              onClick={handleShowCart}
              className="flex flex-row items-center relative"
            >
              <BiShoppingBag className="mr-[5px]" />
              Shoping
              {cart.length > 0 && (
                <div className="absolute top-[-10px] right-[-20px] w-[20px] h-[20px] text-white text-center leading-[20px] text-[10px] bg-red-800 rounded-full">
                  {cart.length}
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="md:flex hidden flex-row justify-between p-[31px] items-center ">
        <div>
          <BiSearch className="w-[25px] h-[25px]" />
        </div>
        <div className="md:flex hidden">
          <Link to="/">
            <img src={logo} alt="" className="w-[180px] h-[34px]" />
          </Link>
        </div>
        <div className="flex flex-row gap-[25px]">
          <span className="flex flex-row items-center">
            <BiUser className="mr-[5px]" />
            Account
          </span>
          <span
            onClick={handleShowCart}
            className="flex flex-row items-center cursor-pointer relative"
          >
            <BiShoppingBag className="mr-[5px]" />
            Shoping
            {cart.length > 0 && (
              <div className="absolute top-[-10px] right-[-20px] w-[20px] h-[20px] text-white text-center leading-[20px] text-[10px] bg-red-800 rounded-full">
                {cart.length}
              </div>
            )}
          </span>
        </div>
      </div>

      <div className="md:p-[30px] p-[15px]  md:flex hidden flex-row justify-end md:justify-start relative">
        <ul className="md:flex flex-row justify-between  w-[100%] hidden ">
          <li>
            <a href="#jewelry" className="">
              Jewelry & Accessories
            </a>
          </li>
          <li>
            <a href="#clothing">Clothing & Shoes</a>
          </li>
          <li>
            <a href="#home">Home & Living</a>
          </li>
          <li>
            <a href="#wedding">Wedding & Party</a>
          </li>
          <li>
            <a href="#toys">Toys & Entertainment</a>
          </li>
          <li>
            <a href="#art">Art & Collectibles</a>
          </li>
          <li>
            <a href="#craft">Craft Supplies & Tools</a>
          </li>
        </ul>
      </div>

      <div className="md:p-[30px] p-[15px]  flex md:hidden justify-end md:justify-start relative">
        {phoneNav ? (
          <BiX
            onClick={handlePhoneNav}
            className="text-[35px] md:hidden block"
          />
        ) : (
          <BiMenu
            onClick={handlePhoneNav}
            className="text-[35px] md:hidden block"
          />
        )}

        <ul
          className={` flex-row justify-between absolute mt-[35px]  w-full bg-slate-100 left-0 ${
            phoneNav ? "md:flex" : "hidden"
          }`}
        >
          <li className="p-[15px] cursor-pointer">
            <a href="#jewelry" className="">
              Jewelry & Accessories
            </a>
          </li>
          <li className="p-[15px] cursor-pointer">
            <a href="#clothing">Clothing & Shoes</a>
          </li>
          <li className="p-[15px] cursor-pointer">
            <a href="#home">Home & Living</a>
          </li>
          <li className="p-[15px] cursor-pointer">
            <a href="#wedding">Wedding & Party</a>
          </li>
          <li className="p-[15px] cursor-pointer">
            <a href="#toys">Toys & Entertainment</a>
          </li>
          <li className="p-[15px] cursor-pointer">
            <a href="#art">Art & Collectibles</a>
          </li>
          <li className="p-[15px] cursor-pointer">
            <a href="#craft">Craft Supplies & Tools</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
