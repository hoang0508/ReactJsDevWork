import React from "react";
import { useAuth } from "./Contexts/auth-context";
import { FaTrashAlt } from "react-icons/fa";
const CartItem = () => {
  const { cartItem } = useAuth();
  return (
    <div className="m-5 flex flex-col gap-x-3">
      {cartItem &&
        cartItem.length > 0 &&
        cartItem.map((item, index) => (
          <div className="flex gap-5 mb-3">
            <div className="">{index}</div>
            <div className="w-10 h-10">
              <img
                src={item.strDrinkThumb}
                alt=""
                className="object-cover rounded-full"
              />
            </div>
            <div>
              <FaTrashAlt />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartItem;
