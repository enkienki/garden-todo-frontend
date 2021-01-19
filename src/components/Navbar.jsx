import React from "react";

export default function NavBar() {
  const fontSize = {
    fontSize: "1.8rem",
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(3px)",
      }}
      className="nav fixed-bottom justify-content-around"
    >
      <a style={fontSize} className="text-decoration-none" href="/home">
        <i className="text-light fas fa-home"></i>
      </a>
      <a style={fontSize} className="text-decoration-none" href="/new-order">
        <i className="text-light far fa-plus-square"></i>
      </a>
      <a style={fontSize} className="text-decoration-none" href="/orders-list">
        <i className="text-light far fa-list-alt"></i>
      </a>
      <a
        style={fontSize}
        className="text-decoration-none"
        href="/finished-orders"
      >
        <i className="text-light far fa-check-square"></i>
      </a>
      <a
        style={fontSize}
        className="text-decoration-none"
        href="/menu-modification"
      >
        <i className="text-light far fa-edit"></i>
      </a>
    </div>
  );
}
