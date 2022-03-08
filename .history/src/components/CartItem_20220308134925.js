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
          <div className="flex gap-5">
            <div className="">{index}</div>
            <div>
              <img src={item.strDrinkThumb} alt="" />
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
