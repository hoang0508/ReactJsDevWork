import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./Form.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Validation với Yup
const schema = Yup.object({
  firstName: Yup.string()
    .required("Please enter your firstName")
    .max(10, "Must be 10 character or less"),
});

const FormUseHook = () => {
  // useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  // submit form
  const onSubmit = (values) => {
    if (isValid) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
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
        {/* {errors.firstName && errors.firstName.type === "required" && (
          <div className="form-error">firstName empty</div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="form-error">Must be 10 characters or less</div>
        )} */}
        {/* Validatio vs Yup */}
        {errors?.firstName?.type && (
          <div className="form-error">{errors.firstName.message}</div>
        )}
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

// const MyInput = ({...props}) => {
//   return (
//     <Controller />
//   )
// }

export default FormUseHook;
