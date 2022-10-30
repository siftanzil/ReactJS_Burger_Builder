import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
  ingredients: [
    { type: "salad", amount: 1 },
    { type: "cheese", amount: 1 },
    { type: "meat", amount: 1 },
  ],
  totalPrice: 180,
  purchasable: true,
};

const INGREDIENT_PRICES = {
  salad: 30,
  cheese: 50,
  meat: 100,
};

export default (state = INITIAL_STATE, action) => {
  const ingredients = [...state.ingredients];

  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      for (let item of ingredients) {
        if (item.type === action.payload) item.amount++;
      }
      return {
        ...state,
        ingredients: ingredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
      };

    case actionTypes.REMOVE_INGREDIENT:
      for (let item of ingredients) {
        if (item.type === action.payload) {
          if (item.amount <= 0) return state;
          item.amount--;
        }
      }
      return {
        ...state,
        ingredients: ingredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
      };

    case actionTypes.UPDATE_PURCHASABLE:
      const sum = state.ingredients.reduce((sum, element) => {
        return sum + element.amount;
      }, 0);
      return {
        ...state,
        purchasable: sum > 0,
      };

    default:
      return state;
  }
};
