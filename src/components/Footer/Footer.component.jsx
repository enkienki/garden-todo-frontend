import React from "react";
import "../../App.scss";

const Footer = ({ myRef }) => {
  return (
    <footer className="w-100" ref={myRef}>
      <p className="pl3">
        2019 made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by Gaetan Peltier
      </p>
    </footer>
  );
};

export default Footer;
