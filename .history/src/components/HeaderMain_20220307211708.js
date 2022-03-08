import React from "react";

const HeaderMain = () => {
  return (
    <div className="header">
      <div className="header-user">
        <div>
          <img
            src="https://images.unsplash.com/photo-1646596539959-d333fc8b398d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="header-img"
          />
        </div>
        <span className="header-heading">Welcome back!!</span>
      </div>
      <div>
        <button className="header-btn">Sign up</button>
      </div>
    </div>
  );
};

export default HeaderMain;
