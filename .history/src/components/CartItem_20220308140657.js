import React from "react";
import { useAuth } from "./Contexts/auth-context";
import { FaTrashAlt } from "react-icons/fa";
const CartItem = () => {
  const { cartItem, removeCart } = useAuth();
  console.log(removeCart);
  return (
    <div className="m-5 flex flex-col gap-x-3">
      {cartItem &&
        cartItem.length > 0 &&
        cartItem.map((item, index) => (
          <div className="flex items-center gap-5 mb-3" key={item.idDrink}>
            <div className="w-10">{index}</div>
            <div className="w-10 h-10">
              <img
                src={item.strDrinkThumb}
                alt=""
                className="object-cover rounded-full"
              />
            </div>
            <div
              className="bg-red-500 text-white p-2 ml-4 rounded-lg cursor-pointer"
              onClick={() => removeCart(item.idDrink)}
            >
              <FaTrashAlt />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartItem;
