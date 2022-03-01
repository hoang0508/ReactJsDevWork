import React from "react";
import { useForm } from "react-hook-form";
import InputModal from "./InputModal";

const Modal = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (values) => {
    if (!isValid) return;
    console.log(values);
  };
  return (
    <div className="modal fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="overlay absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="content bg-white max-w-[420px] rounded-lg">
        <h2 className="text-xl font-semibold">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputModal
            name="username"
            type="text"
            id="username"
            label="User name"
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
