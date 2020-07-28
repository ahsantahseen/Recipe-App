import React from "react";
import classes from "./InputForm.module.css";

const InputFrom = (props) => {
  return (
    <div>
      <form className={classes.SearchForm} onSubmit={props.getSearch}>
        <input
          className={classes.SearchBar}
          placeholder="Enter Dish"
          value={props.Search}
          onChange={props.updateSearch}
        ></input>
        <button className={classes.SearchButton} type="submit">
          Search!
        </button>
      </form>
    </div>
  );
};

export default InputFrom;
