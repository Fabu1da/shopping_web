import React, { Fragment, useContext, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { CartContext } from "./helper/CartContext";
import { BiArrowFromLeft } from "react-icons/bi";
const Cart = ({ isToggled, setIsToggled }) => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const handleShowCart = () => {
    if (isToggled) {
      setIsToggled(false);
    }
  };

  const handleRemove = (event) => {
    let product = event.target.attributes[0].value;

    const newCart = cart.filter((cartItem) => cartItem.name !== product);
    console.log(newCart);
    setCart(newCart);
  };

  const handCounter = (e) => {
    e.preventDefault();
    const button = e.target.innerText;
    let product = e.target.attributes[0].value;

    if (button === "+") {
      let updatedCart = cart.map((item) => {
        if (product === item.name) {
          return { ...item, counter: item.counter + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      let updatedCart = cart.map((item) => {
        if (product === item.name) {
          if (item.counter > 1) return { ...item, counter: item.counter - 1 };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum = sum + cart[i].counter * cart[i].price;
    }
    setTotal(sum);
  }, [cart]);

  const CartList = () => {
    return (
      <Fragment>
        {cart.map((single, index) => {
          return (
            <div
              key={`single-${index}`}
              className="flex flex-row justify-between text-[16px] py-[15px] bortder-b border-b-slate-500 "
            >
              <div className="flex-1">
                {single.name}
                <p className="text-[14px] text-red-500">
                  $ {single.price} * {single.counter} ={" "}
                  {single.price * single.counter}
                </p>
              </div>
              <div>
                <button
                  data={single.name}
                  onClick={handCounter}
                  className=" bg-red-800 text-[18px] rounded-md px-3 text-white mr-1"
                >
                  -
                </button>
                {single.counter}
                <button
                  data={single.name}
                  onClick={handCounter}
                  className=" bg-green-800 text-[18px] rounded-md ml-1 px-3 text-white"
                >
                  +
                </button>
                <button
                  data={single.name}
                  onClick={handleRemove}
                  className=" bg-green-800 text-[18px] rounded-md ml-1 px-3 text-white"
                >
                  rem
                </button>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  };

  return (
    <div
      className={` shadow-lg top-0 cursor-pointer h-full right-0 md:w-[30%] w-[100%] p-[40px] bg-white ${
        !isToggled ? "hidden" : "fixed"
      } `}
    >
      <FiX onClick={handleShowCart} className="text-[45px]" />
      <div className="flex flex-row my-[24px] justify-between items-center text-[30px] leading-[39px] font-[500] text-center">
        Cart{" "}
        <span className=" w-[30px] h-[30px] text-white text-center leading-[30px] text-[16px] bg-red-800 rounded-full ">
          {cart.length}
        </span>
      </div>

      <CartList />

      <div className="border-t border-t-slate-400 py-[20px] flex flex-row justify-between">
        <span className="text-[20px] font-[600]">Total</span>{" "}
        <span className="text-[20px] font-[600]">€ {total}</span>
      </div>
      <div>
        <button className="flex flex-row items-center text-[20px] gap-3 border rounded-full px-[34px] py-[14px] ">
          Check out <BiArrowFromLeft className="" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
