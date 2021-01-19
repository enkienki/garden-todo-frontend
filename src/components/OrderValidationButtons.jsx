import React from "react";
import Button from "./Button";

export default function OrderValidationButtons({
  handleAnnuler,
  handleEnvoyer,
}) {
  return (
    <div className="container mt-3">
      <div className="row justify-content-end">
        <Button
          name={"Annuler"}
          color={"bg-gradient-danger"}
          handleClick={handleAnnuler}
        />
        <Button
          name={"Envoyer"}
          color={"bg-gradient-success"}
          handleClick={handleEnvoyer}
        />
      </div>
    </div>
  );
}
