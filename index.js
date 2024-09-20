const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const objeto = {
    a: "hola",
    b: "chau",
  };
  res.json(objeto);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
