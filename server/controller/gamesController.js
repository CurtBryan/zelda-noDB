let gameCollection = require("../data/games.json");

module.exports = {
  getAllGames: (req, res, next) => {
    res.status(200).send(gameCollection);
  }
};
