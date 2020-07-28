import React from "react";
import classes from "./Recipe.module.css";
import uuid from "react-uuid";
const RecipeFunc = (props) => {
  return (
    <div className={classes.recipeCard}>
      <h1>{props.title}</h1>
      <p>{props.calories.toFixed(2)} Calories </p>
      <img className={classes.recipeCardimg} src={props.image} alt=""></img>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li key={uuid()}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeFunc;
