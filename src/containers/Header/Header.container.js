import React from "react";
import { Logo } from "./Logo/Logo.component";

const Header = () => {
  return (
    <>
      <Logo />
      <p className="tc">
        Rechercher un lieu, une ville et obtenez la météo locale ainsi que plein
        d'idées sur ce que vous pouvez faire au jardin en cette période de
        l'année!
      </p>
    </>
  );
};

export default Header;
