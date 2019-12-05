const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const util = require("util");
// const originURL = "http://127.0.0.1:3000";
const originURL = "http://edouard-dev.com";

// Shortening Functions
const nodeFull = obj => {
  return util.inspect(obj, false, null, true);
};

//
// server init
//
const port = 8081;
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://127.0.0.1:3000"
  })
);
app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`Fitness server is listening on ${port}`);
});

//
// default get
//
app.get("/", (req, res) => {
  res.send("Hello :)");
});

//
// db settings
//
const mongoDB_User = "nomprenom";
const mongoDB_Password = "atadel93isa";
const mongoDB_Port = "27017";
const mongoDB_DB_Name = "nomprenom_fitness";
// db connecting
mongoose.connect(
  `mongodb://${mongoDB_User}:${mongoDB_Password}@mongodb-${mongoDB_User}.alwaysdata.net:${mongoDB_Port}/${mongoDB_DB_Name}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connexion réussi !");
  // SCHEMA
  const userSchema = new mongoose.Schema({
    userName: String,
    exos: [{ id: Number, exoName: String, entries: [Object] }]
  });
  const User = mongoose.model("User", userSchema);

  // NEW USER
  // var newUser = new User({
  //   userName: "New User",
  //   exos: []
  // });

  // NEW USER (exemple)
  // var newUser = new User({
  //   userName: "Edouard",
  //   exos: [
  //     {
  //       id: 0,
  //       exoName: "Jogging",
  //       entries: [
  //         { id: 1, value: 10 },
  //         { id: 2, value: 20 },
  //         { id: 3, value: 15 }
  //       ]
  //     },
  //     {
  //       id: 1,
  //       exoName: "Chin-up",
  //       entries: [
  //         { id: 1, value: 10 },
  //         { id: 2, value: 20 },
  //         { id: 3, value: 15 }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       exoName: "Rows",
  //       entries: [
  //         { id: 1, value: 10 },
  //         { id: 2, value: 20 },
  //         { id: 3, value: 15 }
  //       ]
  //     }
  //   ]
  // });

  // INSERT
  // newUser
  //   .save()
  //   .then(addedUser => console.log("NEW USER", addedUser))
  //   .catch(error => console.error(error));

  // SELECT *
  // User.find()
  //   .then(allUsers => console.log(nodeFull(allUsers)))
  //   .catch(error => console.error(error));

  // SELECT one user by _id
  // User.findById("5de70aa933699a0a50712e69")
  //   .then(foundUser => console.log(foundUser))
  //   .catch(error => console.error(error));

  // UPDATE one user by _id
  // User.findByIdAndUpdate("5de70aa933699a0a50712e69", {
  //   exos: {
  //     _id: "5de6cb8f90fb686e21d5c169",
  //     exoName: "Jogging",
  //     entries: [10, 30, 40, 50]
  //   }
  // })
  //   .then(updatedUser => console.log("UPDATED", updatedUser))
  //   .catch(error => console.log(error));

  // DELETE one user account by _id
  // User.findByIdAndDelete("5de70aa933699a0a50712e69")
  //   .then(deletedUser => console.log("DELETED", deletedUser))
  //   .catch(error => console.error(error));

  // DELETE all
  // User.deleteMany({})
  //   .then(q => console.log("DELETED ALL"))
  //   .catch(error => console.error(error));

  // SENDING FITNESS DATABASE USING MONGODB
  app.get("/getLog", (request, response) => {
    User.findById("5de70aa933699a0a50712e69")
      .then(foundUser => response.send({ body: foundUser }))
      .catch(error => response.send(error));
  });

  // MODIFYING FITNESS DATABASE USING MONGODB
  app.post("/editLog", (request, response) => {
    User.findByIdAndUpdate("5de70aa933699a0a50712e69", {
      exos: [...request.body.exos]
    })
      .then(updatedUser => console.log("UPDATED", updatedUser))
      .catch(error => console.log(error));
  });
});
