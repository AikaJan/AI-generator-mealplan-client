import "./home.css";
import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="option" onClick={() => handleOptionClick("/page1")}>
          <div className="icon">🍽️</div>
          <div className="text">
            Choose products and create your own recipe.
          </div>
        </div>
        <div className="option" onClick={() => handleOptionClick("/page2")}>
          <div className="icon">📅</div>
          <div className="text">Form for creating a diet calendar.</div>
        </div>
        <div className="option" onClick={() => handleOptionClick("/page3")}>
          <div className="icon">🥗</div>
          <div className="text">
            Form for creating a 10-day gluten and sugar free meal plan
          </div>
          <div className="home" onClick={() => handleOptionClick("/")}>
            <div className="text">Go Home</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
