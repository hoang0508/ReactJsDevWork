import React from "react";
import { useAuth } from "./Contexts/auth-context";
import { FaMoon } from "react-icons/fa";
import "./HeaderMain.scss";
const HeaderMain = () => {
  const { user, setUser } = useAuth();
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-user">
          {user ? (
            <>
              <div className="header-img">
                <img
                  src="https://images.unsplash.com/photo-1646596539959-d333fc8b398d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <span className="header-heading">
                Welcome back!! <strong>{user.name}</strong>
              </span>
            </>
          ) : (
            <span className="header-heading">Welcome back!!</span>
          )}
        </div>
        <div className="header-button">
          <div className="cursor-pointer">
            <FaMoon />
          </div>
          <button className="header-btn" onClick={() => setUser(null)}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
