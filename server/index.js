const express = require("express");
const app = express();
const port = 4001;
app.listen(port, () => console.log(`server is listening on ${port} 🚩 `));
app.use(express.json());
const { getAllGames } = require("./controller/gamesController");
const {
  getAllComments,
  postToComments,
  updateComment,
  deleteComment
} = require("./controller/commentsController");
app.get("/api/games", getAllGames);
app.get("/api/comments", getAllComments);
app.post("/api/comments", postToComments);
app.put("/api/comments/:id", updateComment);
app.delete("/api/comments/:id", deleteComment);
