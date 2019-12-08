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
    </div>
  );
};

export default TextArea;
