import React, { useEffect, useState } from "react";
import conf from "../conf/conf";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewData] = useState(null);
  const API_KEY = conf.apiKey;

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    setNewData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  });

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1 className="Title">Trendy News</h1>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          ></input>
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay Update with Trendy News</p>
      </div>
      <div className="categoryBtn">
        <button onClick={userInput} value={"sports"}>
          Sports
        </button>
        <button onClick={userInput} value={"politics"}>
          Politics
        </button>
        <button onClick={userInput} value={"entertainment"}>
          Entertainment
        </button>
        <button onClick={userInput} value={"health"}>
          Health
        </button>
        <button onClick={userInput} value={"fitness"}>
          Fitness
        </button>
      </div>
      {newsData ? <Card data={newsData} /> : null}
    </div>
  );
};

export default Newsapp;
