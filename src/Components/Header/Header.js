import React from "react";
import triforceIcon from "../../zeldapics/triforceIcon.png";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header className="mainHeader">
        <img className="triforceL" src={triforceIcon} />
        <h1 className="title"> Legend of Zelda Database </h1>
        <img className="triforceR" src={triforceIcon} />
      </header>
    </div>
  );
}
