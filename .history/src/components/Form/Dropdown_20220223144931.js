import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/UseClickOutSide";

const Dropdown = ({
  data,
  control,
  name,
  setValue,
  dropdownLabel,
  ...props
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();

  const dropdownValue = useWatch({
    control,
    name: props.name,
    defaultValue: "",
  });
  console.log(dropdownValue);
  const [label, setLabel] = useState(dropdownLabel);
  return (
    <div className="form-dropdown" ref={nodeRef}>
      <div className="form-dropdown-select" onClick={(e) => setShow(!show)}>
        Select your job
      </div>
      <div className={`form-dropdown-option ${show ? "" : "opacity"}`}>
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
