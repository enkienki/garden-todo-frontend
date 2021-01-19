import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewOrder from "./pages/NewOrder";
import OrdersList from "./pages/OrdersList";
import FinishedOrders from "./pages/FinishedOrders";
import MenuModification from "./pages/MenuModification";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/new-order">
            <NewOrder />
          </Route>
          <Route path="/orders-list">
            <OrdersList />
          </Route>
          <Route path="/finished-orders">
            <FinishedOrders />
          </Route>
          <Route path="/menu-modification">
            <MenuModification />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
