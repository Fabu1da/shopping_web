import { useContext } from "react";
import { CartContext } from "../helper/CartContext";
import { Link } from "react-router-dom";
const Card = ({ product: { img, title, price, category, id } }) => {
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
    <div className="flex flex-col w-[285px]">
      <img src={img} alt="" />
      <p>
        <Link to={`product/${id}`}>{title}</Link>
      </p>
      <div className="flex flex-row justify-between my-[5px]">
        <span className="text-black/50 leading-[21px]">{category}</span>
        <span>$ {price}</span>
      </div>
      <div onClick={handleCart}>
        <button
          data={[title, price, category]}
          className="border border-black p-3"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
