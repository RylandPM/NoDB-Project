let characterCollection = require("../characterDB.json");

module.exports = {
  getAllSheets: (req, res, next) => {
    res.status(200).send(characterCollection);
  },
  getSingleSheet: (req, res, next) => {
    const { id } = req.params;
    res
      .status(200)
      .send(
        characterCollection[
          characterCollection.findIndex(char => char.id == id)
        ]
      );
  },
  postNewSheet: (req, res, next) => {
    console.log(req.body);
    const newSheet = req.body;
    newSheet.id = characterCollection[characterCollection.length - 1].id + 1;
    characterCollection.push(newSheet);
    res.status(200).send(characterCollection);
  },
  updateSheet: (req, res, next) => {
    const { id } = req.params;
    const newSheet = req.body;
    characterCollection[
      characterCollection.findIndex(char => char.id == id)
    ] = newSheet;
    console.log(characterCollection);
    res.status(200).send(characterCollection);
  },
  deleteSheet: (req, res, next) => {
    const { id } = req.params;
    console.log("deleting element ", id);
    // use findIndex for id
    characterCollection.splice(
      characterCollection.findIndex(char => char.id == id),
      1
    );
    res.status(200).send(characterCollection);
  }
};
