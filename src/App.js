import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "e61a6aed"; //PLEASE USE YOUR OWN API DETAILS HERE
  const APP_KEY = "123c4b2f7a9e266be9f8b1cd1ce5e6d3"; //AND HERE TOO..

  useEffect(() => {
    console.log("useEffect run");
    getApiData();
  }, []);
  const [Recipe, setRecipe] = useState([]);
  const getApiData = async () => {
    const Response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const Data = await Response.json();
    setRecipe(Data.hits);
  };
  return (
    <div className="App">
      <h1>RECIPE APP</h1>
      <form className="Search-Form">
        <input className="Search-Bar" placeholder="Enter Dish"></input>
        <button className="Search-Button" type="submit">
          Search!
        </button>
      </form>
    </div>
  );
};

export default App;
