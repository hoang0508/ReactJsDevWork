import React from "react";
import "./Form.scss";
import { useFormik } from "formik";
import { values } from "lodash";
const Form = () => {
  const Formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(Formik);
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          className="form-input"
          type="text"
          name="firstName"
          id="firstName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          className="form-input"
          type="text"
          name="lastName"
          id="lastName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input className="form-input" type="email" name="email" id="email" />
      </div>
      <button type="submit" className="form-btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
