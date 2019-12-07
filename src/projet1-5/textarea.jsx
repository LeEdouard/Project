import React from "react";

const TextArea = ({ name, value, onChange, label, error }) => {
  return (
    <div className="">
      <label className="" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="form-control"
        id={name}
        onChange={onChange}
        cols="30"
        rows="5"
        value={value}
        maxLength="500"
        placeholder="Ecrivez ici votre message (max : 500 caractères)"
      ></textarea>
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

export default TextArea;
