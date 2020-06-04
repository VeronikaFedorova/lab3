const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const postRouter = require("./routes/post");

const port = process.env.PORT || 5000;
const clientPath = path.join(__dirname, "client");

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://veronika:1q2w3e4r@cluster0-z8hff.mongodb.net/todos",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    );
    app.listen(port, () => {
      console.log(`Server has been started on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

const app = express();
app.use(bodyParser.json());
app.use("/api/post", postRouter);
app.use(express.static(clientPath));
