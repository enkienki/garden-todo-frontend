import React from "react";
import groupBy from "../functions/group-by";
import TableOrder from "./TableOrder";

export default function Dish({ order }) {
  const dish = order.map((a) => {
    return groupBy(a, "type");
  });
  return (
    <>
      {dish.map((a, index) => (
        <div className="col-auto" key={index}>
          <TableOrder a={a} />
        </div>
      ))}
    </>
  );
}
