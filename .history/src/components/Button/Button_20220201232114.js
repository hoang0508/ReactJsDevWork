import React, { useEffect, useRef, useState } from "react";
import "./Button.scss";
import "boxicons/css/boxicons.min.css";
const Button = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState(false);
  const btnRef = useRef(null);
  const handleClickBtn = () => {
    setLoading(!loading);
    if (setText(!loading)) {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleClickBtn();
    const btnWidth = btnRef.current.clientWidth + 29;
    btnRef.current.style.width = btnWidth;
  }, []);
  return (
    <div>
      <button className="btn" onClick={() => handleClickBtn()} ref={btnRef}>
        <div className={`btn-spinner ${loading ? "active" : ""}`}>
          <i className="bx bx-loader-alt bx-spin"></i>
        </div>
        <span className="btn-text">Loading</span>
      </button>
      {text && <p className="btn-desc">Happy new year 2022</p>}
    </div>
  );
};

export default Button;
