import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

class Checkout extends Component {
  state = {
    values: {
      deliveryAddress: "",
      phone: "",
      paymentType: "Cash On Delivery",
    },
  };
  inputChangeHandler = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value,
      },
    });
  };

  submitHandler = (event) => {
    const order = {
      ingredients: this.props.ingredients,
      customer: this.state.values,
      price: this.props.totalPrice,
      orderTime: new Date(),
    };
    axios
      .post(
        "https://sif-react-burger-builder-default-rtdb.firebaseio.com/orders.json",
        order,
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    event.preventDefault();
    this.setState({
      values: {
        deliveryAddress: "",
        phone: "",
        paymentType: "Cash On Delivery",
      },
    });
  };

  render() {
    return (
      <div className="container">
        <hr />
        <h4>Payment: {this.props.totalPrice} BDT </h4>
        <hr />

        <form>
          <textarea
            name="deliveryAddress"
            value={this.state.values.deliveryAddress}
            placeholder="Address"
            className="form-control"
            onChange={(event) => this.inputChangeHandler(event)}
          ></textarea>
          <br />
          <input
            name="phone"
            className="form-control"
            placeholder="Phone number"
            value={this.state.values.phone}
            onChange={(event) => this.inputChangeHandler(event)}
          />
          <br />
          <select
            name="paymentType"
            className="form-control"
            value={this.state.values.paymentType}
            onChange={(event) => this.inputChangeHandler(event)}
          >
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Bkash">Bkash</option>
          </select>
          <br />
          <button className="btn btn-warning" onClick={this.submitHandler}>
            Place Order
          </button>
          <Link to="/">
            <button className="btn btn-secondary ms-1"> Cancel </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Checkout);
