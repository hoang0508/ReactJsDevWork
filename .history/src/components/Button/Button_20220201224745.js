import React from "react";
import "boxicons/css/boxicons.min.css";
const Button = () => {
  return (
    <div>
      <button>
        <div className="btn-spinner">
          <i className="bx bx-loader-alt bx-spin"></i>
        </div>
      </button>
    </div>
  );
};

export default Button;
