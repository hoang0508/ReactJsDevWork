import React from "react";
import { useController } from "react-hook-form";
const InputModal = ({ control, label, ...props }) => {
  const { field } = useController({ control, name: props.name });
  return (
    <div className='className="flex flex-col gap-3"'>
      <label htmlFor={props.name || props.id}>{label}</label>
      <input {...field} {...props} />
    </div>
  );
};

export default InputModal;
