import React from "react";

const Input = ({ name, value, onChange, label, error }) => {
  return (
    <div className="m-0">
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
    </div>
  );
};

export default Input;
