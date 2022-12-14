/** @format */
import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Header from "./Header/Header";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import Auth from "./Auth/Auth";
import { connect } from "react-redux";

import { authCheck } from "../redux/authActionCreators";
import Logout from "./Auth/Logout";

const mapDispatchToProps = (dispatch) => {
   return {
      authCheck: () => dispatch(authCheck()),
   };
};

const mapStateToProps = (state) => ({ token: state.token });

class Main extends Component {
   componentDidMount() {
      this.props.authCheck();
   }

   render() {
      let routes = null;
      if (this.props.token === null) {
         routes = (
            <Routes>
               <Route path="/" exact="true" element={<BurgerBuilder />}></Route>
               <Route path="/login" exact="true" element={<Auth />}></Route>
               <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
         );
      } else {
         routes = (
            <Routes>
               <Route path="/orders" element={<Orders />}></Route>
               <Route path="/checkout" element={<Checkout />}></Route>
               <Route path="/logout" element={<Logout />}></Route>
               <Route path="/" exact="true" element={<BurgerBuilder />}></Route>
               <Route path="*" element={<Navigate to="/" />} />
            </Routes>
         );
      }

      return (
         <div>
            <Header />
            <div className="container">{routes}</div>
         </div>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
