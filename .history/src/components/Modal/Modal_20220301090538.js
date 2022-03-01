import React from "react";
import { useForm } from "react-hook-form";
import InputModal from "./InputModal";

const Modal = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
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
      <div className="content bg-white max-w-[420px] w-full p-4 rounded-lg z-10">
        <h2 className="text-2xl font-semibold text-center mb-3">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <InputModal
            name="username"
            type="text"
            id="username"
            label="User name"
            control={control}
          />
          <InputModal
            name="email"
            type="email"
            id="email"
            label="Email address"
            control={control}
          />
          <InputModal
            name="password"
            type="password"
            id="password"
            label="Password"
            control={control}
          />
        </form>
        <button className="w-full p-3 bg-blue-500 text-white rounded-lg">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Modal;
