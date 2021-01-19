import React from "react";

export default function RadioButton({
  name,
  handleClick,
  isActive,
  value,
  id,
}) {
  return (
    <>
      <input
        className="d-none"
        type="radio"
        id={id}
        name={name}
        value={value}
        onClick={handleClick}
      />
      <label
        className={`btn btn-sm text-light m-1 font-weight-bold text-uppercase border-secondary ${
          isActive
            ? "bg-gradient-primary shadow border-dark"
            : "bg-gradient-dark"
        }`}
        htmlFor={id}
      >
        {id}
      </label>
    </>
  );
}
