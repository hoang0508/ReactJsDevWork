import React from "react";

const Form = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="userName" className="form-label">
          Username
        </label>
        <input
          className="form-input"
          type="text"
          name="userName"
          id="userName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="passWord" className="form-label">
          Password
        </label>
        <input
          className="form-input"
          type="text"
          name="passWord"
          id="passWord"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input className="form-input" type="email" name="email" id="email" />
      </div>
      <div className="form-radio">
        <label htmlFor="radio" className="form-label">
          Gender
        </label>
        <div className="form-radio--gender">
          <div className="form-radio--male">
            <input type="radio" name="male" id="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form-radio--male">
            <input type="radio" name="male" id="male" />
            <label htmlFor="male">Male</label>
          </div>
        </div>
      </div>
      <select name="job">
        <option value="">Select your job</option>
        <option value="">Select your job</option>
        <option value="">Select your job</option>
        <option value="">Select your job</option>
      </select>
    </form>
  );
};

export default Form;
