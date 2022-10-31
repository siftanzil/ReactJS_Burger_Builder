/** @format */
import React from "react";
import { Routes, Route } from "react-router-dom";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Header from "./Header/Header";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import Auth from "./Auth/Auth";

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" exact="true" element={<BurgerBuilder />}></Route>
          <Route path="/login" exact="true" element={<Auth />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
