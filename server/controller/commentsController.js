let comments = []; //require("../data/comments.json");
let id = 1;
module.exports = {
  getAllComments: (req, res, next) => {
    res.status(200).send(comments);
  },
  postToComments: (req, res, next) => {
    const { userName, gameName, comment } = req.body;
    console.log(userName, gameName, comment);
    console.log(req.body);
    comments.push({ id, userName, gameName, comment });
    id++;
    res.status(200).send(comments);
    console.log(comments);
  },
  updateComment: (req, res, next) => {
    const { id } = req.params;
    const { new_comment } = req.query;
    const index = comments.findIndex(element => {
      return element.id == id;
    });
    console.log(index);
    if (index !== -1) {
      comments[index].comment = new_comment;
    }
    res.status(200).send(comments);
  },
  deleteComment: (req, res, next) => {
    const { id } = req.params;
    // const { delete_comment } = req.query;
    const index = comments.findIndex(element => {
      return element.id == id;
    });
    console.log(index);
    if (index !== -1) {
      comments.splice([index], 1);
    }
    res.status(200).send(comments);
  }
};
