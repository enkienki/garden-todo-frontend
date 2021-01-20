import React, { useState } from "react";

import "../../App.scss";

import AutoComplete from "./components/AutoComplete.component";
import InputComponent from "./components/Input.component";

const Input = ({ userInput }) => {
  const [value, setValue] = useState("");
  const [autoComplete, setAutoComplete] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // use MAPBOX geocoding API to fetch city coordinates with autocomplete option, limited to 3 result and country of France
  const getCityCoordinates = async (userInput) => {
    try {
      if (userInput.length <= 2) {
        return setAutoComplete("");
      }
      const response = await fetch(
        `https://gardentodo-back.herokuapp.com/api/geocoding/${userInput}`
      );
      const data = await response.json();
      setAutoComplete(data.features);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnKeyDown = (userKeyDown) => {
    if (userKeyDown === 13 && autoComplete.length) {
      userInput(autoComplete[activeSuggestion]);
      setValue(autoComplete[activeSuggestion].place_name);
      setIsOpen(false);
      setActiveSuggestion(0);
    }
    if (userKeyDown === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (userKeyDown === 40) {
      if (activeSuggestion === autoComplete.length - 1) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <div className="flex flex-column items-center pt5-ns pt4">
      <form
        className="w-30-ns w-50-m w-90"
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        onSubmit={(e) => e.preventDefault()}
        onKeyDown={(e) => handleOnKeyDown(e.keyCode)}
      >
        <div className="relative">
          <InputComponent
            value={value}
            handleClick={() => {
              setValue("");
              setAutoComplete("");
            }}
            handleChange={(e) => {
              setValue(e.target.value);
              getCityCoordinates(e.target.value);
              setIsOpen(true);
            }}
          />
          {autoComplete && isOpen ? (
            <div className="absolute w-100 z-index99">
              {autoComplete.map((city, index) => {
                let selected;
                if (activeSuggestion === index) {
                  selected = true;
                }
                return (
                  <AutoComplete
                    selected={selected}
                    key={city.place_name}
                    city={city}
                    handleClick={() => {
                      setValue(city.place_name);
                      userInput(city);
                      setIsOpen(false);
                    }}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Input;
