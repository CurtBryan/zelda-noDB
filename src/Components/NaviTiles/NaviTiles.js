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
        <div className="buttons">
          <button>The Legend of Zelda - NES</button>
          <button>The Legend of Zelda: Link's Adventure - NES</button>
          <button>The Legend of Zelda: A Link to the Past - SNES</button>
          <button>The Legend of Zelda: Link's Awakening - GB</button>
          <button>The Legend of Zelda: Ocarina of Time - N64</button>
          <button>The Legend of Zelda: Majora's Mask - N64</button>
          <button>The Legend of Zelda: Oracle of Seasons/Ages - GBC</button>
          <button>The Legend of Zelda: Wind Waker - GC</button>
        </div>
      </div>
    );
  }
}
