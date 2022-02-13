import React from "react";
import "./Form.scss";
import { useFormik } from "formik";
import * as Yub from "yup";
const Form = () => {
  // Sử dụng FormMik
  const Formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    // Validate sử dụng Yub
    validationSchema: Yub.object({
      firstName: Yub.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yub.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      email: Yub.string().email().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(Formik);
  return (
    <form className="form" onSubmit={Formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          className="form-input"
          type="text"
          name="firstName"
          id="firstName"
          value={Formik.values.firstName}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
        />
        {Formik.touched.firstName && Formik.errors.firstName ? (
          <div className="form-error">{Formik.errors.firstName}</div>
        ) : null}
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
          value={Formik.values.lastName}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
        />
        {Formik.touched.lastName && Formik.errors.lastName ? (
          <div className="form-error">{Formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          value={Formik.values.email}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
        />
      </div>
      <button type="submit" className="form-btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
