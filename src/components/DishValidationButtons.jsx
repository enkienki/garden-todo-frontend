import React from "react";
import Button from "./Button";

export default function DishValidation({
  handleExtra,
  handleAnnuler,
  handleValider,
}) {
  return (
    <div className="container mt-3">
      <div className="row justify-content-end">
        <Button
          name={"Supplément"}
          color={"bg-gradient-warning text-dark"}
          handleClick={handleExtra}
        />
        <Button
          name={"Annuler"}
          color={"bg-gradient-danger"}
          handleClick={handleAnnuler}
        />
        <Button
          name={"Valider"}
          color={"bg-gradient-success"}
          handleClick={handleValider}
        />
      </div>
    </div>
  );
}
