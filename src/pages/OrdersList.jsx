import React, { useState, useEffect } from "react";
import axios from "axios";

import Dish from "../components/Dish-OrderList";
import Navbar from "../components/Navbar";
import socket from "../functions/socket-connection";
import Button from "../components/Button";
import Title from "../components/TitlePage";
import calculatePrice from "../functions/calculate-price";

export default function OrdersList() {
  const [order, setOrder] = useState();
  const [isSending, setIsSending] = useState([]);

  useEffect(() => {
    socket.emit("initial_data");
    socket.on("get_data", (data) => setOrder(data));
    return () => socket.off("get_data", (data) => setOrder(data));
  }, []);

  return (
    <div className="container-fluid bg-dark min-vh-100 p-3">
      <Title title="commandes en cours" />

      <div className="p-2"></div>

      {order ? (
        order.length === 0 ? (
          <div className="text-light text-center font-weight-light">
            Pas de commande en cours
          </div>
        ) : (
          order.map((a) => (
            <div
              className="container bg-gradient-dark border border-secondary rounded mb-4 shadow"
              key={a._id}
            >
              <div className="text-light text-center font-weight-bold text-uppercase pt-2">
                {a.place}
              </div>
              <div className="text-light text-right text-capitalize">
                total: {order.length && calculatePrice(a.order)}€
              </div>

              <div className="row">
                <Dish order={a.order} />
              </div>

              {/* <div className="text-white-50" style={{ fontSize: "0.8rem" }}>
                n°{a._id}
              </div> */}
              <div className="row justify-content-center p-2">
                <Button
                  name={
                    isSending.includes(a._id) ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <i className="fas fa-thumbs-up"></i>
                    )
                  }
                  color="bg-gradient-success shadow pl-4 pr-4"
                  handleClick={async () => {
                    setIsSending([...isSending, a._id]);
                    await axios.post(
                      "https://commande-kebab-backend.herokuapp.com/api/sendfinishedorder",
                      {
                        order: a.order,
                        place: a.place,
                      }
                    );
                    await axios.post(
                      "https://commande-kebab-backend.herokuapp.com/api/deleteorder",
                      {
                        id: a,
                      }
                    );
                  }}
                />
              </div>
            </div>
          ))
        )
      ) : (
        <div className="text-center">
          <div className="spinner-border text-secondary m-5"></div>
        </div>
      )}
      <div className="p-4"></div>

      <Navbar />
    </div>
  );
}
