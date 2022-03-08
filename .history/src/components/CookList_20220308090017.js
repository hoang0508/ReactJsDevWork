import React from "react";
import { useAuth } from "./Contexts/auth-context";
import { FaCartPlus, FaSearch, FaHeart } from "react-icons/fa";
import "./CookList.scss";
const CookList = () => {
  const { theme } = useAuth();
  return (
    <>
      <div className={`mt-10 p-5 ${theme ? "dark" : "light"} cook`}>
        <div className="cook-list">
          <div className="cook-item">
            <h3 className="cook-heading">Ordinary Drink</h3>
            <div className="cook-image">
              <img
                src="https://images.unsplash.com/photo-1646641312891-161e76759a69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
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
        </div>
      </div>
    </>
  );
};

export default CookList;
