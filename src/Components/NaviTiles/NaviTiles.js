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
    // this.handleChangeTwo = this.handleChangeTwo.bind(this);
    // console.log(this.state.id);
  }

  componentDidMount() {
    axios.get(`/api/games`).then(response => {
      this.setState({
        games: response.data
      });
    });
  }

  // componentWillMount() {
  //   this.handleChangeOne();
  // }
  // componentWillMount() {
  //   this.handleChangeTwo();
  // }

  handleChangeOne(game) {
    this.setState({
      gameShown: game
    });
  }
  // handleChangeTwo() {
  //   this.setState(
  //     {
  //       id: 2
  //     },
  //     console.log(this.state.id)
  //   );
  // }

  render() {
    const { games } = this.state;
    // const {}
    return (
      <div className="naviTiles">
        <div className="buttons">
          <button
          // onClick={() =>
          //this.handleChangeOne(games[0])//
          // console.log(this.handleChangeOne(games[0]))
          // }
          >
            The Legend of Zelda - NES
          </button>
          <button>The Legend of Zelda: Link's Adventure - NES</button>
          <button>The Legend of Zelda: A Link to the Past - SNES</button>
          <button>The Legend of Zelda: Link's Awakening - GB</button>
          <button>The Legend of Zelda: Ocarina of Time - N64</button>
          <button>The Legend of Zelda: Majora's Mask - N64</button>
          <button>The Legend of Zelda: Oracle of Seasons/Ages - GBC</button>
          <button>The Legend of Zelda: Wind Waker - GC</button>
          {console.log(this.state.gameShown)}
        </div>
      </div>
    );
  }
}
