import React from "react";
import { useForm } from "react-hook-form";
import InputModal from "./InputModal";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactDOM from "react-dom";

const schema = yup.object({
  username: yup.string().required("Please enter your username!"),
  email: yup.string().email().required("Please enter your email!"),
  password: yup
    .string()
    .min(8, "Password contains at least 8 characters or more")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/
    )
    .required("Please enter your password"),
});

const Modal = ({ open = false, hanldeClose = () => {} }) => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onsubmit = (values) => {
    if (!isValid) return;
    console.log(values);
  };
  return ReactDOM.createPortal(
    <div
      className={`modal fixed inset-0 z-[9999] flex items-center justify-center ${
        open ? "" : "opacity-0 invisible"
      } `}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-20"
        onClick={hanldeClose}
      ></div>
      <div className="content bg-white max-w-[420px] w-full p-4 rounded-lg z-10 relative">
        <div
          className="absolute top-0 right-0 -translate-y-2/4 translate-x-1 bg-gray-400 rounded-full p-2 cursor-pointer"
          onClick={hanldeClose}
        >
          <FaTimes />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-3">Sign In</h2>
        <form onSubmit={handleSubmit(onsubmit)}>
          <InputModal
            name="username"
            type="text"
            id="username"
            label="User name"
            placeholder="Enter your username"
            control={control}
            errors={errors}
          />
          <InputModal
            name="email"
            type="email"
            id="email"
            label="Email address"
            placeholder="Enter your email"
            control={control}
          />
          <InputModal
            name="password"
            type="password"
            id="password"
            label="Password"
            control={control}
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>,
    document.querySelector("body")
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  hanldeClose: PropTypes.func,
};

export default Modal;
