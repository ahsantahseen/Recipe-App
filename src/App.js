import React, { useEffect, useState } from "react";
import "./App.css";
import RecipeFunc from "./Recipe/Recipe";
import uuid from "react-uuid";

const App = () => {
  const APP_ID = "e61a6aed"; //PLEASE USE YOUR OWN API DETAILS HERE
  const APP_KEY = "123c4b2f7a9e266be9f8b1cd1ce5e6d3"; //AND HERE TOO..

  const [ShouldSearch, setShouldSearch] = useState(false);
  const [SearchQuery, setSearchQuery] = useState("");
  const [Recipe, setRecipe] = useState([]);
  const [Search, setSearch] = useState("");
  useEffect(() => {
    console.log("useEffect run");
    getApiData();
  }, [SearchQuery]);

  const getApiData = async () => {
    const Response = await fetch(
      `https://api.edamam.com/search?q=${SearchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const Data = await Response.json();
    setRecipe(Data.hits);
    console.log(uuid());
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(Search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setSearchQuery(Search);
    setSearch(" ");
  };
  return (
    <div className="App">
      <h1>RECIPE APP</h1>
      <form className="Search-Form" onSubmit={getSearch}>
        <input
          className="Search-Bar"
          placeholder="Enter Dish"
          value={Search}
          onChange={updateSearch}
        ></input>
        <button className="Search-Button" type="submit">
          Search!
        </button>
      </form>
      <div className="recipe">
        {Recipe.map((recipe) => (
          <RecipeFunc
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            key={uuid()}
          ></RecipeFunc>
        ))}
      </div>
    </div>
  );
};

export default App;
