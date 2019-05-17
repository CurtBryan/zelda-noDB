import React, { Component } from "react";
import "./Games.css";
import Comments from "../Comments/Comments";

export default class Games extends Component {
  render() {
    return (
      <div className="gamesComments">
        <div>
          <Comments />
        </div>
      </div>
    );
  }
}
