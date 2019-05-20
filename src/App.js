import React from "react";
import Header from "./Components/Header/Header.js";
import NaviTiles from "./Components/NaviTiles/NaviTiles";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <NaviTiles />
      </div>
    </div>
  );
}

export default App;
