import React from "react";
import "Button.scss";
import "boxicons/css/boxicons.min.css";
const Button = () => {
  return (
    <div>
      <button className="btn">
        <div className="btn-spinner">
          <i className="bx bx-loader-alt bx-spin"></i>
        </div>
        <span className="btn-text">Loading</span>
      </button>
    </div>
  );
};

export default Button;
