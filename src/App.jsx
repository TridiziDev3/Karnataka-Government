// src/App.jsx
import React from "react";
import Homepage from "./components/Homepage/Homepage";
import "./index.css"; // ensure styles are loaded

const App = () => {
  return (
    <div className="page-container">
      <Homepage />
    </div>
  );
};

export default App;
