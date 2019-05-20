import React from "react";
import axios from "axios";
import Background from "./zeldapics/background.jpg";
import Header from "./Components/Header/Header.js";
import NaviTiles from "./Components/NaviTiles/NaviTiles";
import Games from "./Components/Games/Games";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <NaviTiles />
        <Games />
      </div>
    </div>
  );
}

export default App;
