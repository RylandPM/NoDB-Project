let characterCollection = require("../characterDB.json");

module.exports = {
  getAllSheets: (req, res, next) => {
    res.status(200).send(characterCollection);
  },
  getSingleSheet: (req, res, next) => {
    const { id } = req.params;
    res.status(200).send(characterCollection[id - 1]);
  },
  postNewSheet: (req, res, next) => {
    const newSheet = req.body;
    newSheet.id = characterCollection[characterCollection.length - 1].id + 1;
    characterCollection.push(newSheet);
    res.status(200).send(characterCollection);
  },
  updateSheet: (req, res, next) => {
    const newSheet = req.body;
    characterCollection[newSheet.id - 1] = newSheet;
    res.status(200).send(characterCollection);
  },
  deleteSheet: (req, res, next) => {
    const { id } = req.params;
    characterCollection.splice(id - 1, 1);
    res.status(200).send(characterCollection);
  }
};
