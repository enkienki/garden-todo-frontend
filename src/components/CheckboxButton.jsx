import React from "react";

export default function CheckboxButton({ name, handleClick, isActive }) {
  return (
    <div
      className={`btn btn-sm text-light font-weight-bold text-uppercase border-secondary ${
        isActive ? `bg-gradient-primary shadow border-dark` : `bg-gradient-dark`
      }  m-1`}
      onClick={() => {
        handleClick();
      }}
    >
      {name}
    </div>
  );
}
