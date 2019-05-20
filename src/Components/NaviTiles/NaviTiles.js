import React, { Component } from "react";
import Games from "../Games/Games";
import "./NaviTiles.css";
import axios from "axios";

export default class NaviTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      gameShown: []
    };
    this.handleChangeOne = this.handleChangeOne.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/games`).then(response => {
      this.setState({
        games: response.data
      });
    });
  }

  handleChangeOne(game) {
    this.setState({
      gameShown: game
    });
  }

  render() {
    const { games } = this.state;
    return (
      <div className="naviTiles">
        <div className="buttons">
          <button onClick={() => this.handleChangeOne(games[0])}>
            The Legend of Zelda - NES
          </button>
          <button onClick={() => this.handleChangeOne(games[1])}>
            The Legend of Zelda: Link's Adventure - NES
          </button>
          <button onClick={() => this.handleChangeOne(games[2])}>
            The Legend of Zelda: A Link to the Past - SNES
          </button>
          <button onClick={() => this.handleChangeOne(games[3])}>
            The Legend of Zelda: Link's Awakening - GB
          </button>
          <button onClick={() => this.handleChangeOne(games[4])}>
            The Legend of Zelda: Ocarina of Time - N64
          </button>
          <button onClick={() => this.handleChangeOne(games[5])}>
            The Legend of Zelda: Majora's Mask - N64
          </button>
          <button onClick={() => this.handleChangeOne(games[6])}>
            The Legend of Zelda: Oracle of Seasons/Ages - GBC
          </button>
          <button onClick={() => this.handleChangeOne(games[7])}>
            The Legend of Zelda: Wind Waker - GC
          </button>
        </div>
        <section>
          <Games gameShown={this.state.gameShown} />
        </section>
      </div>
    );
  }
}
