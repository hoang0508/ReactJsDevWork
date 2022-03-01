import React from "react";

const FormUseHook = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input className="form-input" type="text" id="firstName" />
      </div>
    </form>
  );
};

export default FormUseHook;
