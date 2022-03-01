import React from "react";
import { useController } from "react-hook-form";
const InputModal = ({ control, ...props }) => {
  const { field } = useController({});
  return (
    <div className='className="flex flex-col gap-3"'>
      <input {...field} {...props} />
    </div>
  );
};

export default InputModal;
