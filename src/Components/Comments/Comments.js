import React, { Component } from "react";
import axios from "axios";
import "./Comments.css";
import Comment from "./CommentsPost.js";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Comments: [],
      updatedComment: ""
    };
    this.editPost = this.editPost.bind(this);
    this.postCommentToPage = this.postCommentToPage.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/comments`)
      .then(response => {
        this.setState({
          Comments: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePost(id) {
    axios.delete(`/api/comments/${id}`).then(response => {
      this.setState({
        Comments: response.data
      });
    });
  }

  editPost(id, updatedComment) {
    axios
      .put(`/api/comments/${id}?new_comment=${updatedComment}`)
      .then(response => {
        this.setState({
          Comments: response.data,
          comment: ""
        });
      });
  }

  postCommentToPage(gameCommentedOn, newComment, name) {
    let userName = "userName";
    let comment = "comment";
    let gameName = "gameName";
    axios
      .post("/api/comments", {
        [userName]: name,
        [gameName]: gameCommentedOn,
        [comment]: newComment
      })
      .then(response => {
        this.setState({
          Comments: response.data
        });
      });
  }

  render() {
    const { Comments, updatedComment } = this.state;
    const mappedcomments = Comments.map(element => {
      return (
        <div key={element.id} className="comments">
          <div className="comment">
            Name:
            {element.userName}
          </div>
          <div>Comment: {element.comment}</div>
          <div>
            <button onClick={() => this.editPost(element.id, updatedComment)}>
              Edit Post
            </button>
            <input
              onChange={e =>
                this.setState({
                  updatedComment: e.target.value
                })
              }
            />
            <button onClick={() => this.deletePost(element.id)}> Delete</button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Comment
          postCommentToPage={this.postCommentToPage}
          gameShown={this.props.gameShown}
        />
        <hr />
        {mappedcomments}
      </div>
    );
  }
}
