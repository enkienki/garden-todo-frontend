import React, { useEffect, useState } from "react";

import Dish from "../components/Dish-OrderList";
import Navbar from "../components/Navbar";
import Title from "../components/TitlePage";

import socket from "../functions/socket-connection";
import dateFromObjectId from "../functions/date-from-ObjectId";
import calculatePrice from "../functions/calculate-price";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);

export default function FinishedOrders() {
  const [finishedOrder, setFinishedOrder] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    socket.emit("finished_orders");
    socket.on("get_finished_orders", (data) => setFinishedOrder(data));
    return () =>
      socket.off("get_finished_orders", (data) => setFinishedOrder(data));
  }, []);

  return (
    <div className="container-fluid bg-dark min-vh-100 p-3">
      <Title title="commandes terminées" />
      <div className="row justify-content-center m-4">
        <DatePicker
          className="text-center"
          selected={startDate}
          dateFormat="dd/MM/yyyy"
          locale="fr"
          onChange={(date) => {
            setStartDate(date);
          }}
        />
      </div>
      {finishedOrder.length ? (
        finishedOrder
          .filter(
            (a) =>
              dateFromObjectId(a._id).toLocaleString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
              }) ===
              startDate.toLocaleString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
              })
          )
          .map((a, index) => (
            <div
              className="container bg-gradient-dark border border-secondary rounded mb-4 shadow"
              key={a._id}
            >
              <div className="row justify-content-center">
                <div className="text-light font-weight-bold text-uppercase p-2">
                  {a.place}
                </div>
                <div className="text-light p-2">
                  {dateFromObjectId(a._id).toLocaleString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
              <div className="text-light text-right text-capitalize">
                total: {finishedOrder.length && calculatePrice(a.order)}€
              </div>
              <div className="row">
                <Dish order={a.order} />
              </div>
              {/* <div div className="text-white-50" style={{ fontSize: "0.8rem" }}>
                n°{a._id}
              </div> */}
              <div className="p-2"></div>
            </div>
          ))
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
