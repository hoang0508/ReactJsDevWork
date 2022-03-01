import React from "react";
import { useController } from "react-hook-form";
const InputModal = ({ control, name, label, ...props }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className="flex flex-col gap-3 mb-4">
      <label className="text-sm" htmlFor={props.name || props.id}>
        {label}
      </label>
      <input
        className="p-3 border rounded-lg border-gray-300 outline-none"
        {...field}
        {...props}
      />
      <p>{errors?.name.message}</p>
    </div>
  );
};

export default InputModal;
