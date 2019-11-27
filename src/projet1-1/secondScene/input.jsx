import React from "react";

const Input = ({ name, value, onChange, label, error }) => {
  return (
    <div className="row form-group">
      <label className="" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={name}
        // placeholder={label}
        onChange={onChange}
        value={value}
        maxLength="50"
      />
      {error && (
        <div className="alert alert-danger m-1 p-1" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
