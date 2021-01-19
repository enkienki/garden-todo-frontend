import React from "react";
import Button from "./Button";

export default function Dish({ dish, handleModifier, handleAnnuler }) {
  return (
    <div className="row">
      <div className="col-auto">
        <table className="table table-sm shadow table-responsive rounded text-center">
          <thead>
            <tr className="table-primary text-capitalize font-italic">
              {dish &&
                Object.entries(dish).map((b, index) => (
                  <th key={index} scope="col">
                    {b[0]}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            <tr className="table-light text-uppercase font-weight-bold">
              {dish &&
                Object.entries(dish).map((b, index) => (
                  <td key={index}>
                    {b[1].map((c, index) => (
                      <div key={index}>{c.name}</div>
                    ))}
                  </td>
                ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-auto">
        <div className="text-light p-1">
          Prix:{" "}
          {Object.values(dish)
            .map((a) => a[0].price)
            .reduce((acc, curr) => acc + curr, 0)}
          €
        </div>
        <Button
          name="Modifier"
          color="btn-warning text-dark btn-sm"
          handleClick={handleModifier}
        />
        <Button
          name="Annuler"
          color="btn-danger btn-sm"
          handleClick={handleAnnuler}
        />
      </div>
      <div className="container">
        <hr style={{ backgroundColor: "grey" }} />
      </div>
    </div>
  );
}
