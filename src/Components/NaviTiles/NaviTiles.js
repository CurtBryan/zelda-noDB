import React, { Component } from "react";
import "./NaviTiles.css";

export default class NaviTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="naviTiles">
        <ul className="buttons">
          <li>The Legend of Zelda - NES</li>
          <li>The Legend of Zelda: Link's Adventure - NES</li>
          <li>The Legend of Zelda: A Link to the Past - SNES</li>
          <li>The Legend of Zelda: Link's Awakening - GB</li>
          <li>The Legend of Zelda: Ocarina of Time - N64</li>
          <li>The Legend of Zelda: Majora's Mask - N64</li>
          <li>The Legend of Zelda: Oracle of Seasons/Ages - GBC</li>
          <li>The Legend of Zelda: Wind Waker - GC</li>
        </ul>
      </div>
    );
  }
}
