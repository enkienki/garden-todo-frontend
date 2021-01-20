import React from "react";
import { Title } from "../../components/Title/Title.component";

const Todo = ({ children }) => {
  return (
    <div className="center">
      <div className="fl w-50-l w-100 pt4 mb5">
        <div className="w-90 w-50-m center">
          <Title text="Quoi faire au jardin aujourd'hui" />
        </div>
        <div className="flex flex-column justify-center center w-90 w-50-m w-70-l pt4 center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Todo;
