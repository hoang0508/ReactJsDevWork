import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import MyInput from "./Input";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";

// Data Dropdown
const DropdownData = [
  {
    id: 1,
    value: "frontend developer",
    text: "Frontend Developer",
  },
  {
    id: 2,
    value: "backen developer",
    text: "Backen Developer",
  },
  {
    id: 3,
    value: "fullstack developer",
    text: "Fullstack Developer",
  },
];

// Validation với Yup
const schema = Yup.object({
  firstName: Yup.string()
    .required("Please enter your firstName")
    .max(10, "Must be 10 character or less"),
  lastName: Yup.string()
    .required("Please enter your lastName")
    .max(10, "Must be 10 character or less"),
  email: Yup.string().email().required("Please enter your email"),
  gender: Yup.string()
    .required("Please select your gender")
    .oneOf(["male", "female"]),
});

const FormUseHook = () => {
  // useForm hook
  const {
    // register
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
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
    <form className="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <MyInput
          name="firstName"
          type="text"
          id="firstName"
          placeholder="Please your firstName"
          control={control}
        />
        {/* Validation */}
        {errors.firstName?.message && (
          <div className="form-error">{errors.firstName.message}</div>
        )}
        {/* <input
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
        /> */}
        {/* {errors.firstName && errors.firstName.type === "required" && (
          <div className="form-error">firstName empty</div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="form-error">Must be 10 characters or less</div>
        )} */}
        {/* Validatio vs Yup */}
        {/* {errors?.firstName?.type && (
          <div className="form-error">{errors.firstName.message}</div>
        )} */}
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <MyInput
          name="lastName"
          type="text"
          id="lastName"
          placeholder="Please your lastName"
          control={control}
        />
        {errors.lastName?.message && (
          <div className="form-error">{errors.lastName.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <MyInput
          name="email"
          type="email"
          id="email"
          placeholder="Please your email"
          control={control}
        />
        {errors.email?.message && (
          <div className="form-error">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <MyInput
          name="password"
          type="password"
          id="password"
          placeholder="Please your password"
          control={control}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <div className="form-list">
          <div className="form-item">
            <Radio control={control} name="gender" value="male" />
            <span>Male</span>
          </div>
          <div className="form-item">
            <Radio control={control} name="gender" value="female" />
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <div className="form-error">{errors.gender.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="" className="form-label">
          Are you
        </label>
        <Dropdown
          data={DropdownData}
          name="job"
          setValue={setValue}
          control={control}
          dropdownLabel="Select your job"
        />
      </div>
      <div className="form-group">
        <Checkbox
          name="term"
          text="I accept the terms and conditions"
          control={control}
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
