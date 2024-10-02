// import "./App.css";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import PageOne from "./components/Pages/PageOne";
// import PageThree from "./components/Pages/PageThree";
// import Footer from "./components/Pages/Footer";

// function App() {
//   const navigate = useNavigate();
//   const handleOptionClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<home />} />
//         <Route path="/page1" element={<PageOne />} />
//         <Route path="/page3" element={<PageThree />} />
//       </Routes>
//       <div className="container">
//         <div className="option" onClick={() => handleOptionClick("/page1")}>
//           <div className="icon">🍽️</div>
//           <div className="text">
//             Choose products and create your own recipe.
//           </div>
//         </div>
//         <div className="option" onClick={() => handleOptionClick("/page3")}>
//           <div className="icon">🥗</div>
//           <div className="text">
//             Form for creating a 7-day gluten and sugar free meal plan
//           </div>
//         </div>
//       </div>
//       <div className="footer-footer">
//         <Footer />
//       </div>
//     </div>
//   );
// }

import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import PageOne from "./components/Pages/PageOne";
import PageThree from "./components/Pages/PageThree";
import Footer from "./components/Pages/Footer";

// Компонент Home, если он отсутствует
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Recipe Generator</h1>
      <p>Select an option to get started!</p>
    </div>
  );
};

function App() {
  const navigate = useNavigate();
  
  const handleOptionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<PageOne />} />
        <Route path="/page3" element={<PageThree />} />
      </Routes>
      <div className="container">
        <div className="option" onClick={() => handleOptionClick("/page1")}>
          <div className="icon">🍽️</div>
          <div className="text">
            Choose products and create your own recipe.
          </div>
        </div>
        <div className="option" onClick={() => handleOptionClick("/page3")}>
          <div className="icon">🥗</div>
          <div className="text">
            Form for creating a 7-day gluten and sugar-free meal plan.
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

// export default App;
