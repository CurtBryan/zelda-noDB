import React, { Component } from "react";
import "./CommentsPost.css";
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCommentedOn: "",
      newComment: ""
    };
  }
  render() {
    const { name, gameCommentedOn, newComment } = this.state;
    const { postCommentToPage } = this.props;
    return (
      <div className="inputs">
        <input
          placeholder="Comment"
          onChange={e =>
            this.setState({
              gameCommentedOn: e.target.value
            })
          }
          value={gameCommentedOn}
        />
        <input
          placeholder="User Name"
          onChange={e =>
            this.setState({
              newComment: e.target.value
            })
          }
          value={newComment}
        />
        <button
          onClick={() => postCommentToPage(name, gameCommentedOn, newComment)}
        >
          Add Comment{" "}
        </button>
      </div>
    );
  }
}
