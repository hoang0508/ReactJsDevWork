import React from "react";
import "./Form.scss";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yub from "yup";
const FormV2 = () => {
  return (
    //  Sử dụng thẻ Formik
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
      {/* Thay form = Form */}
      <Form className="form">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          {/* Thay input = Field */}
          <Field
            className="form-input"
            type="text"
            name="firstName"
            id="firstName"
          ></Field>
          {/* Validate Form */}
          <div className="form-error">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <Field
            className="form-input"
            type="text"
            name="lastName"
            id="lastName"
          ></Field>
          {/* Validate Form */}
          <div className="form-error">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <Field
            className="form-input"
            type="email"
            name="email"
            id="email"
          ></Field>
          {/* Validate Form */}
          <div className="form-error">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>
        <button type="submit" className="form-btn">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormV2;
