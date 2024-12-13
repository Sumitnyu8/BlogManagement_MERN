const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const UserRoutes = require("./routes/UserRoutes");
const BlogRoutes = require("./routes/BlogRoutes");
const bodyParser = require('body-parser');
const cors = require('cors');


mongoose
  .connect(process.env.Mongo_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use("/", UserRoutes);
app.use("/blog", BlogRoutes);

app.get("/", (req, res) => {
  res.end("hii i am alive");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000");
});