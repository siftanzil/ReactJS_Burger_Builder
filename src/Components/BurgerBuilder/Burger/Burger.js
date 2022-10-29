import React from "react";
import Ingredient from "./../Ingredient/Ingredient";
import "./Burger.css";

const Burger = (props) => {
  let ingredientArray = props.ingredients
    .map((item) => {
      let amountArray = [...Array(item.amount).keys()];
      return amountArray.map((num) => {
        return <Ingredient type={item.type} key={Math.random()} />;
      });
    })
    .reduce((arr, element) => {
      return arr.concat(element);
    }, []);
  if (ingredientArray.length === 0) {
    ingredientArray = <h2>Please add tasty layers!</h2>;
  }
  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {ingredientArray}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
