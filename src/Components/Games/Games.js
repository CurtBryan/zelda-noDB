import React, { Component } from "react";
import "./Games.css";
import Comments from "../Comments/Comments";
import axios from "axios";

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameShownTest: {
        id: "1",
        name: "Legend of Zelda",
        year: "1986",
        system: "Nintendo Entertainment System",
        summary:
          "A small kingdom in the land of Hyrule is engulfed by chaos when an army led by Ganon, the Prince of Darkness, invaded and stole the Triforce of Power, one part of a magical artifact which alone bestows great strength. In an attempt to prevent him from acquiring the Triforce of Wisdom, another of the three pieces, Princess Zelda splits it into eight fragments and hides them in secret underground dungeons. Before eventually being kidnapped by Ganon, she commands her nursemaid Impa to find someone courageous enough to save the kingdom. While wandering the land, the old woman is surrounded by Ganon's henchmen, when a young boy named Link appears and rescues her. Upon hearing Impa's plea, he resolves to save Zelda and sets out to reassemble the scattered fragments of the Triforce of Wisdom, with which Ganon can then be defeated.",
        coverArt:
          "https://www.mobygames.com/images/covers/l/14445-the-legend-of-zelda-nes-front-cover.jpg"
      }
    };
  }

  // componentWillMount() {
  //   axios.get(`/api/games`).then(response => {
  //     this.setState({
  //       games: response.data
  //     });
  //   });
  // }

  render() {
    return (
      <div className="gamesComments">
        <div className="gameBox">
          <section className="gamePicture">
            <img className="coverArt" src={this.props.gameShown.coverArt} />
            <div className="firstInfo">
              <h1> {this.props.gameShown.name}</h1>
              <h2>{this.props.gameShown.year} </h2>
              <h2>{this.props.gameShown.system}</h2>
            </div>
          </section>
        </div>
        <div className="gameInfo">
          <p>{this.props.gameShown.summary}</p>
        </div>
        <div className="commentBox">
          <Comments />
        </div>
      </div>
    );
  }
}
