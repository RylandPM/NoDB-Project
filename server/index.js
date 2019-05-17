const express = require("express");
const app = express();
const {
  getAllSheets,
  getSingleSheet,
  postNewSheet,
  updateSheet,
  deleteSheet
} = require("./controller/sheetController");
app.use(express.json());

app.get("/api/char_sheets", getAllSheets);
app.get("/api/char_sheets/:id", getSingleSheet);
app.post("/api/char_sheets", postNewSheet);
app.put("/api/char_sheets/:id", updateSheet);
app.delete("/api/char_sheets/:id", deleteSheet);

const port = 4000;
app.listen(port, () => console.log(`server listening on port: ${port}`));
