import React from "react";
import "../../App.scss";

const TodoDescription = ({ todosDescription }) => {
  return (
    <div className="fl w-100 mt4 mb6 mt3-l flex flex-column items-center bg-card">
      <h3 className="pa2 font-green">{todosDescription.titre}</h3>
      {todosDescription.levée.length > 0 && (
        <div className="w-50-l w-75-m w-100 pa1 tc i">
          Levée: {todosDescription.levée}
        </div>
      )}
      {todosDescription.compost.length > 0 && (
        <div className="w-50-l w-75-m w-100 pb4 tc i">
          Besoin en compost: {todosDescription.compost}
        </div>
      )}
      {todosDescription.semis.length > 0 && (
        <div className="w-50-l w-75-m w-100 pa2 tj">
          <div className="b tc">Semis</div>
          <p>{todosDescription.semis}</p>
        </div>
      )}
      {todosDescription.plantation.length > 0 && (
        <>
          <hr className="w-10" />
          <div className="w-50-l w-75-m w-100 pa2 tj">
            <div className="b tc">Plantation</div>
            <p>{todosDescription.plantation}</p>
          </div>
        </>
      )}
      {todosDescription.entretien.length > 0 && (
        <>
          <hr className="w-10" />
          <div className="w-50-l w-75-m w-100 pa2 tj">
            <div className="b tc">Entretien</div>
            <p>{todosDescription.entretien}</p>
          </div>
        </>
      )}
      {todosDescription.recolte.length > 0 && (
        <>
          <hr className="w-10" />
          <div className="w-50-l w-75-m w-100 pa2 tj">
            <div className="b tc">Recolte</div>
            <p>{todosDescription.recolte}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoDescription;
