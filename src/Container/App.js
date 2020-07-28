import React, { useEffect, useState } from "react";
import "./App.css";
import Recipies from "../Components/Recipe/Recipies";
import uuid from "react-uuid";
import Footerbar from "../Components/UI/footerbar/footerbar";
import InputFrom from "../Components/UI/InputForm/InputFrom";

const App = () => {
  const APP_ID = "e61a6aed"; //PLEASE USE YOUR OWN API DETAILS HERE
  const APP_KEY = "123c4b2f7a9e266be9f8b1cd1ce5e6d3"; //AND HERE TOO..

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
      <p>
        <strong>Made by Ahsan Tahseen</strong>
      </p>
      <InputFrom
        Search={Search}
        updateSearch={updateSearch}
        getSearch={getSearch}
      ></InputFrom>
      <Recipies Recipies={Recipe} Key={uuid()}></Recipies>
      <Footerbar></Footerbar>
    </div>
  );
};

export default App;
