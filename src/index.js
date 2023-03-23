require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const accountRoutes = require("./routes/account.js");

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", accountRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server Listen on http://localhost:${process.env.PORT || 4000}`);
});
