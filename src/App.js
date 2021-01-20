import React, { useState } from "react";

import "tachyons";

import Header from "./containers/Header/Header.container";
import Weather from "./containers/Weather/Weather.container";
import Input from "./containers/Input/Input.container";
import TodoComponent from "./containers/Todo/components/Todo.component";
import TodoDescription from "./components/TodoDescription/TodoDescription.component";
import Footer from "./components/Footer/Footer.component";
import Errors from "./components/Errors/Errors.component";
import Todo from "./containers/Todo/Todo.container";
import LoadingComponent from "./components/Loading/Loading.component";

function App() {
  // used to display message during loading page
  const [loading, setLoading] = useState(false);
  // used to display errors message
  const [errors, setErrors] = useState();
  // used to store and set weather forecast for the next 7 days
  const [weatherForecast, setWeatherForecast] = useState();
  // used to display todos and their description
  const [todos, setTodos] = useState();
  const [plants, setPlants] = useState();
  const [todosDescription, setTodosDescription] = useState();

  // fetch weatherForecast from DARKSKY API for the next 7 days
  const getWeatherForecast = async (city) => {
    if (!city) {
      return setErrors("Définissez un lieu");
    }
    try {
      const response = await fetch(
        `https://gardentodo-back.herokuapp.com/api/weatherforecast/${city.geometry.coordinates[1]},${city.geometry.coordinates[0]}`
      );
      const data = await response.json();
      setWeatherForecast(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // retreive Todos from DB
  const getTodos = async () => {
    try {
      const response = await fetch(
        `https://gardentodo-back.herokuapp.com/api/todo`
      );
      const data = await response.json();
      setTodos(data.todo);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // retreive Plants from DB
  const getPlants = async () => {
    try {
      const response = await fetch(
        `https://gardentodo-back.herokuapp.com/api/plant`
      );
      const data = await response.json();
      setPlants(data.plant);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />

      <Input
        userInput={(city) => {
          setLoading(true);
          getWeatherForecast(city);
          getTodos();
          getPlants();
        }}
      />

      {loading ? (
        <LoadingComponent />
      ) : (
        <div>
          {errors ? <Errors errors={errors} /> : null}

          {weatherForecast ? (
            <Weather weatherForecast={weatherForecast} />
          ) : null}

          {plants && todos ? (
            <Todo>
              {todos.map((todo, index) => (
                <TodoComponent
                  title={todo.title}
                  plant={plants.filter((plant) => todo.tag.includes(plant.tag))}
                  key={index}
                  setTodosDescription={setTodosDescription}
                />
              ))}
            </Todo>
          ) : null}

          {todosDescription ? (
            <TodoDescription todosDescription={todosDescription} />
          ) : null}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
