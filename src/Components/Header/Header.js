import React from "react";
import triforceIcon from "../../zeldapics/triforceIcon.png";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header className="mainHeader">
        <img alt="triforce" className="triforceL" src={triforceIcon} />
        <h1 className="title"> Legend of Zelda </h1>
        <img alt="triforce" className="triforceR" src={triforceIcon} />
      </header>
    </div>
  );
}
