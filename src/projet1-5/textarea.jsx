import React from "react";

const TextArea = ({ name, value, onChange, label, error }) => {
  return (
    <div className="row form-group">
      <label className="" htmlFor={name}>
        {label}
      </label>
      {/* <input
    type="text"
    className="form-control"
    id={name}
    placeholder={label}
    onChange={onChange}
    value={value}
    maxLength="50"
  /> */}
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
      {error && (
        <div className="alert alert-danger m-1 p-1" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextArea;
