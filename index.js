const express = require("express");

const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.json({ msg: "Hello wordl modified 4!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
