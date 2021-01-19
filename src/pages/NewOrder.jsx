import React, { useState, useEffect } from "react";
import axios from "axios";
// import components
import RadioButton from "../components/RadioButton";
import CheckboxButton from "../components/CheckboxButton";
import DishValidationButtons from "../components/DishValidationButtons";
import Dish from "../components/Dish-NewOrder";
import Navbar from "../components/Navbar";
import OrderValidationButtons from "../components/OrderValidationButtons";
import SendingButton from "../components/SendingButton";
//import hooks and functions
import socket from "../functions/socket-connection";
import toggleIngredients from "../functions/toggle-ingredients";
import calculatePrice from "../functions/calculate-price";
import carteToDisplay from "../functions/carte-to-display";
import orderToDisplay from "../functions/order-to-display";
import Title from "../components/TitlePage";

export default function NewOrder() {
  const [carte, setCarte] = useState([]);
  const [place, setPlace] = useState("");
  const [menu, setMenu] = useState([]);
  const [dish, setDish] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [showSupplement, setShowSupplement] = useState(false);
  const [order, setOrder] = useState([]);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    socket.emit("carte");
    socket.on("get_carte", (carte) => setCarte(carte));
    return () => socket.off("get_data", (carte) => setCarte(carte));
  }, []);

  return (
    <div className="bg-dark min-vh-100 pt-3">
      <Title title="nouvelle commande" />
      {carte.length ? (
        <div className="text-center p-1">
          {["emporter", "sur place", "terrasse"].map((a, index) => (
            <RadioButton
              name="placeRadioButtons"
              key={a}
              id={a}
              value={a}
              isActive={place === a}
              handleClick={() => setPlace(a)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <div className="spinner-border text-secondary m-5"></div>
        </div>
      )}

      {place ? (
        <div
          className="container-fluid p-2 mt-2 mb-2 text-center overflow-auto"
          style={{ maxHeight: "10vh", whiteSpace: "nowrap" }}
        >
          {carteToDisplay(place, carte).map((a, index) => (
            <RadioButton
              name="menuRadioButtons"
              id={a[0].type}
              value={a[0].type}
              key={a[0].type}
              isActive={menu[0] === a[0]}
              handleClick={() => {
                setMenu(a);
                setDish([]);
              }}
            />
          ))}
        </div>
      ) : null}

      <div className="container mt-2">
        {place
          ? menu.map((a) => (
              <RadioButton
                name="productRadioButtons"
                key={a._id}
                id={a.name}
                value={a.name}
                isActive={dish.length && dish[0].name === a.name}
                handleClick={() => {
                  setDish([a]);
                }}
              />
            ))
          : null}
      </div>

      {dish.length && dish[0].type.includes("assiette") ? (
        <div className="container mt-2">
          <div className="font-weight-bold text-secondary text-uppercase">
            accompagnement
          </div>
          {carte
            .filter((a) => a.type === "accompagnement")
            .map((a, index) => (
              <CheckboxButton
                name={a.name}
                key={a._id}
                isActive={ingredients.length && ingredients.includes(a)}
                handleClick={() => {
                  toggleIngredients(a, ingredients, setIngredients);
                }}
              />
            ))}
        </div>
      ) : null}

      <div className="container mt-2">
        {(dish.length && dish[0].name.includes("panini")) ||
        (dish.length && dish[0].name.includes("tacos")) ||
        (dish.length && dish[0].name.includes("mexicain")) ||
        (dish.length && dish[0].name.includes("durum"))
          ? [
              carte.filter((a) => a.type === "viande"),
              carte.filter((a) => a.type === "vegetarien"),
            ].map((x, index) => (
              <div className="mt-2" key={`${x[0]}${index}`}>
                <div className="font-weight-bold text-secondary">
                  {x[1].type.toUpperCase()}
                </div>
                {x.map((a, index) => (
                  <CheckboxButton
                    name={a.name}
                    key={a._id}
                    isActive={ingredients.length && ingredients.includes(a)}
                    handleClick={() => {
                      toggleIngredients(a, ingredients, setIngredients);
                    }}
                  />
                ))}
              </div>
            ))
          : null}
      </div>

      {dish.length &&
      dish[0].name.includes("vegetarien") &&
      dish[0].type.includes("sandwich") ? (
        <div className="container mt-2">
          <div className="font-weight-bold text-secondary text-uppercase">
            vegetarien
          </div>
          {carte
            .filter((a) => a.type === "vegetarien")
            .map((a, index) => (
              <CheckboxButton
                name={a.name}
                key={a._id}
                isActive={ingredients.length && ingredients.includes(a)}
                handleClick={() => {
                  toggleIngredients(a, ingredients, setIngredients);
                }}
              />
            ))}
        </div>
      ) : null}

      {dish.length && dish[0].name.includes("cheese") ? (
        <div className="container mt-2">
          <div className="font-weight-bold text-secondary text-uppercase">
            fromage
          </div>
          {carte
            .filter((a) => a.type === "cheese")
            .map((a, index) => (
              <CheckboxButton
                name={a.name}
                key={a._id}
                isActive={ingredients.length && ingredients.includes(a)}
                handleClick={() => {
                  toggleIngredients(a, ingredients, setIngredients);
                }}
              />
            ))}
        </div>
      ) : null}

      <div className="container mt-2">
        {(dish.length && dish[0].type.includes("sandwich")) ||
        (dish.length && dish[0].type.includes("assiette")) ||
        (dish.length && dish[0].type.includes("menu")) ||
        (dish.length && dish[0].type.includes("formule"))
          ? [
              carte.filter((a) => a.type === "crudite"),
              carte.filter((a) => a.type === "sauce"),
            ].map((x, index) => (
              <div className="mt-2" key={`${x[0]}${index}`}>
                <div className="font-weight-bold text-secondary">
                  {x[1].type.toUpperCase()}
                </div>
                {x.map((a, index) => (
                  <CheckboxButton
                    name={a.name}
                    key={a._id}
                    isActive={ingredients.length && ingredients.includes(a)}
                    handleClick={() => {
                      toggleIngredients(a, ingredients, setIngredients);
                    }}
                  />
                ))}
              </div>
            ))
          : null}
      </div>

      <div className="container mt-2">
        {(dish.length && dish[0].name.includes("frites")) ||
        (dish.length && dish[0].type.includes("portion"))
          ? [carte.filter((a) => a.type === "sauce frite")].map((x, index) => (
              <div className="mt-2" key={`${x[0]}${index}`}>
                <div className="font-weight-bold text-secondary">
                  {x[1].type.toUpperCase()}
                </div>
                {x.map((a, index) => (
                  <CheckboxButton
                    name={a.name}
                    key={a._id}
                    isActive={ingredients.length && ingredients.includes(a)}
                    handleClick={() => {
                      toggleIngredients(a, ingredients, setIngredients);
                    }}
                  />
                ))}
              </div>
            ))
          : null}
      </div>

      {menu.length && menu[0].type === "menu" ? (
        <div className="container mt-2">
          <div className="font-weight-bold text-secondary text-uppercase">
            soda
          </div>
          {carte
            .filter((a) => a.type === "soda menu")
            .map((a, index) => (
              <CheckboxButton
                name={a.name}
                key={a._id}
                isActive={ingredients.length && ingredients.includes(a)}
                handleClick={() => {
                  toggleIngredients(a, ingredients, setIngredients);
                }}
              />
            ))}
        </div>
      ) : null}

      {showSupplement && dish.length ? (
        <div className="container mt-2">
          <div className="font-weight-bold text-secondary text-uppercase">
            supplément
          </div>
          {carte
            .filter((a) => a.type === "supplement")
            .map((a, index) => (
              <CheckboxButton
                name={a.name}
                key={a._id}
                isActive={ingredients.length && ingredients.includes(a)}
                handleClick={() => {
                  toggleIngredients(a, ingredients, setIngredients);
                }}
              />
            ))}
        </div>
      ) : null}

      {dish.length ? (
        <DishValidationButtons
          handleExtra={() => setShowSupplement(!showSupplement)}
          handleValider={
            dish.length &&
            (() => {
              setOrder([...order, [...dish, ...ingredients]]);
              setDish([]);
              setIngredients([]);
            })
          }
          handleAnnuler={() => {
            setPlace("");
            setMenu([]);
            setDish([]);
            setIngredients([]);
          }}
        />
      ) : null}

      {order.length ? (
        <div className="container">
          <hr style={{ backgroundColor: "grey" }} />
        </div>
      ) : null}

      {order.length ? (
        <div className="container mt-3">
          {orderToDisplay(order).map((dish, index) => (
            <Dish
              dish={dish}
              key={index}
              handleAnnuler={() => {
                setMenu([]);
                setOrder(order.filter((a, i) => i !== index));
              }}
              handleModifier={() => {
                const dishToModify = order.filter((a, i) => i === index);
                setDish([dishToModify[0][0]]);
                setIngredients(dishToModify[0].slice(1));
                setOrder(order.filter((a, i) => i !== index));
              }}
            />
          ))}
        </div>
      ) : null}

      {isSending ? (
        <SendingButton />
      ) : order.length ? (
        <div className="container">
          <OrderValidationButtons
            handleAnnuler={() => {
              setPlace("");
              setMenu([]);
              setDish([]);
              setOrder([]);
            }}
            handleEnvoyer={async () => {
              setIsSending(true);
              await axios.post(
                "https://commande-kebab-backend.herokuapp.com/api/sendorder",
                {
                  order: order,
                  place: place,
                }
              );
              setIsSending(false);
              setPlace("");
              setMenu([]);
              setDish([]);
              setOrder([]);
            }}
          />
        </div>
      ) : null}

      {order.length ? (
        <div className="container text-light pt-2 pb-5">
          <h3 className="text-right text-capitalize">
            total: {order.length && calculatePrice(order)}€
          </h3>
        </div>
      ) : null}

      <div className="p-5"></div>

      <Navbar />
    </div>
  );
}
