import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name });
  return (
    <label className="custom-radio">
      <input type="radio" className="form-input-radio" {...field} {...props} />
      <div className="form-custom-input"></div>
    </label>
  );
};

export default Radio;
