import React from "react";
import { useAuth } from "./Contexts/auth-context";
import { FaCartPlus, FaSearch, FaHeart } from "react-icons/fa";
import "./CookList.scss";
import LoadingSkeleton from "./Loading/LoadingSkeleton";
const CookList = () => {
  const { theme, cookList, loading } = useAuth();
  return (
    <>
      <div className={`mt-10 p-5 ${theme ? "dark" : "light"} cook`}>
        {!cookList && (
          <p className="text-center mt-10 text-red-500 text-lg">
            Không tìm thấy đồ uống
          </p>
        )}
        <div className="cook-list">
          {loading && (
            <>
              <LoadingCart />
              <LoadingCart />
              <LoadingCart />
            </>
          )}
          {!loading &&
            cookList &&
            cookList.length > 0 &&
            cookList.map((item, index) => (
              <ListCartItem key={item.idDrink} item={item} />
            ))}
        </div>
      </div>
    </>
  );
};

// List Cart item
const ListCartItem = ({ item }) => {
  const { addTocart } = useAuth();
  return (
    <div className="cook-item">
      <h3 className="cook-heading">{item.strDrink}</h3>
      <div className="cook-image">
        <img src={item.strDrinkThumb} alt="" />
      </div>
      <div className="cook-social">
        <div className="cook-icon" onClick={() => addTocart(item)}>
          <FaCartPlus />
        </div>
        <div className="cook-icon">
          <FaSearch />
        </div>
        <div className="cook-icon">
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

// Loading Skeleton
const LoadingCart = () => {
  return (
    <div className="cook-item">
      <h3 className="cook-heading">
        <LoadingSkeleton height="20px" />
      </h3>
      <div className="cook-image">
        <LoadingSkeleton width="100%" height="100%" borderRadius="10px" />
      </div>
      <div className="cook-social">
        <div className="cook-icon">
          <FaCartPlus />
        </div>
        <div className="cook-icon">
          <FaSearch />
        </div>
        <div className="cook-icon">
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default CookList;
