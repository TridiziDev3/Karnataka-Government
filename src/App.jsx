// src/App.jsx
import React from "react";
import Homepage from "./components/Homepage/Homepage";
import "./index.css"; // ensure styles are loaded
import Home from "./components/Home/Home";


const App = () => {
  return (
    <div className="page-container">
      <Home />
    </div>
  );
};

export default App;
