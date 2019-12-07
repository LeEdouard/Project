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
      {error ? (
        <div
          className="alert form-control alert-danger p-1 transition05 h2rem m-0"
          role="alert"
        >
          {error}
        </div>
      ) : (
        <div
          className="alert form-control p-1 transition05 h0rem m-0"
          role="alert"
        ></div>
      )}
    </div>
  );
};

export default Input;
