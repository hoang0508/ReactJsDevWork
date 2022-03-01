import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Validation với Yup
const schema = Yup.object({
  firstName: Yup.string()
    .required("Please enter your firstName")
    .max("Must be 10 character or less"),
});

const FormUseHook = () => {
  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  // submit form
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          className="form-input"
          type="text"
          id="firstName"
          placeholder="Please your firstName"
          // Cách 1: validate bth trong useForm
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
          // Cách 2: Yup
          {...register("firstName")}
        />
        {/* Validatio vs Yup */}
        {errors?.firstName?.type && (
          <div className="form-error">{errors.firstName.message}</div>
        )}
        {/* {errors.firstName && errors.firstName.type === "required" && (
          <div className="form-error">firstName empty</div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="form-error">Must be 10 characters or less</div>
        )} */}
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          className="form-input"
          type="text"
          id="lastName"
          placeholder="Please your lastName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          placeholder="Please your email"
        />
      </div>
      <div>
        <button type="submit" className="form-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormUseHook;
