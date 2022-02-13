import React from "react";
import "./Form.scss";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yub from "yup";
const FormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={Yub.object({
        firstName: Yub.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yub.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yub.string().email().required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
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
          {/* Validation Error , sử dụng touched , error */}
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
          />
          {/* Validation Error , sử dụng touched , error */}
          {Formik.touched.lastName && Formik.errors.lastName ? (
            <div className="form-error">{Formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input className="form-input" type="email" name="email" id="email" />
          {/* Validation Error , sử dụng touched , error */}
          {Formik.touched.email && Formik.errors.email ? (
            <div className="form-error">{Formik.errors.email}</div>
          ) : null}
        </div>
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </Formik>
  );
};

export default FormV2;
