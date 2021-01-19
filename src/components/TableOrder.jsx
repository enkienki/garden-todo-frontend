import React, { useState } from "react";

export default function TableOrder({ a }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <table
      className="table table-sm shadow table-responsive rounded text-center"
      onClick={() => setIsDone(!isDone)}
    >
      <thead>
        <tr
          className={`table-primary text-capitalize font-italic ${
            isDone && "table-success"
          }`}
        >
          {a &&
            Object.entries(a).map((b, index) => (
              <th key={index} scope="col">
                {b[0]}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        <tr className="table-light text-uppercase font-weight-bold">
          {a &&
            Object.entries(a).map((b, index) => (
              <td key={index}>
                {b[1].map((c, index) => (
                  <div key={index}>{c.name}</div>
                ))}
              </td>
            ))}
        </tr>
      </tbody>
    </table>
  );
}
