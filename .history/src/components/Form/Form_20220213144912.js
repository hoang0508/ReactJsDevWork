import React from "react";

const Form = () => {
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
      <button className="form-btn">Submit</button>
    </form>
  );
};

export default Form;
