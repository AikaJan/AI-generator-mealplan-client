import "./App.css";
// import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PageOne from "./components/Pages/PageOne";
// import PageTwo from "./components/Pages/PageTwo";
import PageThree from "./components/Pages/PageThree";

function App() {
  const navigate = useNavigate();
  const handleOptionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <Routes>
        git commit -m "first commit"
        <Route path="/" element={<home />} />
        <Route path="/page1" element={<PageOne />} />
        {/* <Route path="/page2" element={<PageTwo />} /> */}
        <Route path="/page3" element={<PageThree />} />
      </Routes>
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
            Form for creating a 7-day gluten and sugar free meal plan
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
