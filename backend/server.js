const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const roomAPI = require("./src/api/room.api");
const catagoryAPI = require("./src/api/catagory.api");
const { fork } = require("child_process");
const child = fork(`${__dirname}/src/controllers/calculation.js`);
let { EventEmitter } = require("events");
let event = new EventEmitter();

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
  MONGODB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (error) => {
    if (error) {
      console.log("Database Error: ", error.message);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Database Synced");
});

app.route("/").get((req, res) => {
  res.send("AF FINAL");
});

app.use("/room", roomAPI());
app.use("/catagory", catagoryAPI());
app.use("/calculation", (req, res) => {
  let rand = Math.random() * 100; // reference number for event

  child.send({ num: req.query.array, event: rand });
  event.once(rand, (value) => {
    res.send(`${value}`);
  });
});
child.on("message", (msg) => event.emit(msg.event, msg.value));

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});

module.exports = app;
