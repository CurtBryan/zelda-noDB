import React, { Component } from "react";
import "./Games.css";
import Comments from "../Comments/Comments";

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="gamesComments">
        <div className="gameBox">
          <section className="gamePicture">
            <img
              alt="cover art"
              className="coverArt"
              src={this.props.gameShown.coverArt}
            />
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
          <Comments gameShown={this.props.gameShown} />
        </div>
      </div>
    );
  }
}
