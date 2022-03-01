import React from "react";
import { useController } from "react-hook-form";
const InputModal = ({ control, errors, label, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  // const errorsName = props.name;
  return (
    <div className="flex flex-col gap-3 mb-4">
      <label className="text-sm" htmlFor={props.name || props.id}>
        {label}
      </label>
      <input
        className="p-3 border rounded-lg border-gray-300 outline-none bg-white"
        {...field}
        {...props}
      />
      {errors.username && (
        <p className="text-sm mb-3 text-red-400">{errors.username.message}</p>
      )}
    </div>
  );
};

export default InputModal;
