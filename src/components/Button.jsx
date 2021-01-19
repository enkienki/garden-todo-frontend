import React from "react";

export default function Button({ name, color, handleClick }) {
  return (
    <div
      className={`btn btn-sm text-light ${color}  m-1`}
      onClick={() => handleClick()}
    >
      {name}
    </div>
  );
}
