const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Server Berhasil!",
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server Listen on http://localhost:${process.env.PORT || 4000}`);
});
