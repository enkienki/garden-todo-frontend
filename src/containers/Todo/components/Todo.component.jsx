import React from "react";
import "../../../App.scss";

const TodoComponent = ({
  title,
  plant,
  setTodosDescription,
  executeScroll,
}) => {
  // retreive TodosDescription from DB according to tag name
  const getTodosDescription = async (tag) => {
    try {
      const response = await fetch(
        `https://gardentodo-back.herokuapp.com/api/todoDescription/${tag}`
      );
      const data = await response.json();
      setTodosDescription(data.description);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <span className="font-green ma2 bg-card br3 pa2">{title}</span>
      <div className="flex flex-wrap">
        {plant.map((plant, index) => (
          <span
            className="ma2 bg-card br3 pa2 pointer"
            key={index}
            onClick={() => {
              getTodosDescription(plant.tag);
              executeScroll();
            }}
          >
            {plant.tag}
          </span>
        ))}
      </div>
    </>
  );
};

export default TodoComponent;
