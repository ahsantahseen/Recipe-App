import React from "react";
import classes from "./Recipies.module.css";
import RecipeFunc from "./Recipe/Recipe";
import uuid from "react-uuid";

const Recipies = (props) => {
  return (
    <div className={classes.recipies}>
      {props.Recipies.map((recipe) => (
        <RecipeFunc
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredients}
          key={uuid()}
        ></RecipeFunc>
      ))}
    </div>
  );
};

export default Recipies;
