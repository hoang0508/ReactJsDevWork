import React from "react";
import { useAuth } from "./Contexts/auth-context";
import { FaCartPlus, FaSearch, FaHeart } from "react-icons/fa";
import "./CookList.scss";
const CookList = () => {
  const { theme, cookList } = useAuth();
  return (
    <>
      <div className={`mt-10 p-5 ${theme ? "dark" : "light"} cook`}>
        <div className="cook-list">
          {cookList &&
            cookList.length > 0 &&
            cookList.map((item, index) => (
              <div className="cook-item" key={item.idDrink}>
                <h3 className="cook-heading">{item.strCategory}</h3>
                <div className="cook-image">
                  <img src={item.strDrinkThumb} alt="" />
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
            ))}
        </div>
      </div>
    </>
  );
};

export default CookList;
