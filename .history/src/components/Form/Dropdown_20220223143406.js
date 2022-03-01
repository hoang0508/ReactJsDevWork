import React from "react";
import useClickOutSide from "../../hooks/UseClickOutSide";

const Dropdown = ({ data, ...props }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="form-dropdown" ref={nodeRef}>
      <div className="form-dropdown-select" onClick={(e) => setShow(!show)}>
        Select your job
      </div>
      <div className="form-dropdown-option">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div className="form-dropdown-value" key={item.id}>
              {item.text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
