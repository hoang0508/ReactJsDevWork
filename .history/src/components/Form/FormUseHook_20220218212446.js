import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

const FormUseHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
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
          {...register("firstName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <div className="form-error">firstName empty</div>
        )}
        {errors?.firstName?.type === "max" && (
          <div className="form-error">Must be 10 characters or less</div>
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

export default FormUseHook;
