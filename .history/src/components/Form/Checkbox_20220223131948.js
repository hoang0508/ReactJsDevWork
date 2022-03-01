import React from "react";
import { useController } from "react-hook-form";

const Checkbox = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name });
  return (
    <label className="custom-checkbox">
      <input type="checkbox" {...field} {...props} />
    </label>
  );
};

export default Checkbox;
