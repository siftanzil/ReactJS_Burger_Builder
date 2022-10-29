/** @format */

import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

const INGREDIENT_PRICES = {
  salad: 30,
  cheese: 50,
  meat: 100,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: "salad", amount: 1 },
      { type: "cheese", amount: 0 },
      { type: "meat", amount: 1 },
    ],
    totalPrice: 150,
  };

  addIngredientHandle = (type) => {
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    for (let item of ingredients) {
      if (item.type === type) item.amount++;
    }
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
  };

  removeIngredientHandle = (type) => {
    const ingredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    for (let item of ingredients) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
  };

  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingredients={this.state.ingredients} />
        <Controls
          ingredientAdded={this.addIngredientHandle}
          ingredientRemoved={this.removeIngredientHandle}
          price={this.state.totalPrice}
        />
      </div>
    );
  }
}
