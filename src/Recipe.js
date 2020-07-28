import React from "react";

const RecipeFunc = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.calories.toFixed(2)} Calories </p>
      <img src={props.image} alt=""></img>
    </div>
  );
};

export default RecipeFunc;
