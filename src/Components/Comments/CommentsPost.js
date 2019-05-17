import React, { Component } from "react";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gameCommentedOn: "",
      newComment: ""
    };
  }
  render() {
    console.log(this.props.postCommentToPage);
    const { name, gameCommentedOn, newComment } = this.state;
    const { postCommentToPage } = this.props;
    return (
      <div>
        <input
          onChange={e =>
            this.setState({
              name: e.target.value
            })
          }
          value={name}
        />
        <input
          onChange={e =>
            this.setState({
              gameCommentedOn: e.target.value
            })
          }
          value={gameCommentedOn}
        />
        <input
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
