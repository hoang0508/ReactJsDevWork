import React from "react";
import "./Form.scss";
const FormUseHook = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          className="form-input"
          type="text"
          id="firstName"
          placeholder="Please your firstName"
        />
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
          type="text"
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
