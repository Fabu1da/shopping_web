import React, { Fragment, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../components/data/data";
import { CartContext } from "../helper/CartContext";

const Product = () => {
  const params = useParams();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const single = data.filter((product) => product.id === Number(params.id));
    setProduct(single);
  }, [params.id]);

  const { setCart, cart } = useContext(CartContext);
  const handleCart = (e) => {
    let cartproduct = e.target.attributes[0].nodeValue;
    let arr = cartproduct.split(",");
    let new_item = {
      name: arr[0],
      price: arr[1],
      category: arr[2],
      counter: 1,
    };
    let existing_item = cart.find((item) => item.name === new_item.name);
    if (existing_item) {
      let updatedCart = cart.map((item) => {
        if (item.name === new_item.name) {
          return { ...item, counter: item.counter + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, new_item]);
    }
  };

  return (
    <div>
      {product &&
        product.map((unique, index) => {
          return (
            <div
              key={unique.name - index}
              className="p-[15px] md:flex flex-row flex-wrap gap-[35px] md:w-[80%] m-auto w-full"
            >
              <img src={unique.img} alt="" className="flex-1 w-full " />
              <div className="flex-1 p-[20px]">
                <h1 className="text-[45px]">{unique.title}</h1>
                <p className=" leading-[25px] my-[30px]">
                  {unique.description}
                </p>
                <div className="flex flex-row md:justify-start gap-[50px] justify-between my-[5px]">
                  <span className="text-black/50 leading-[21px]">
                    {unique.category}
                  </span>
                  <span className="flex flex-row gap-[10px]">
                    ${" "}
                    {unique.discount ? (
                      <Fragment>
                        <strike className="text-red-700">{unique.price}</strike>
                        {unique.discount}
                      </Fragment>
                    ) : (
                      unique.price
                    )}
                  </span>
                </div>
                <div onClick={handleCart}>
                  <button
                    data={[unique.title, unique.price, unique.category]}
                    className="border border-black p-3"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
