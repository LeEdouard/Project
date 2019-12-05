const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const originURL = "http://127.0.0.1:3000";
// const originURL = "http://edouard-dev.com";
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
    origin: originURL
  })
);
app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`Mailing server is listening on ${port}`);
});

//
// default get
//
app.get("/", (req, res) => {
  res.send("Hello :)");
});

//
// MAILING
//
app.post("/mailing", function(request, response) {
  let transporter = nodemailer.createTransport({
    host: "smtp-nomprenom.alwaysdata.net",
    port: 465,
    secure: true,
    auth: {
      user: "contact@edouard-dev.com",
      pass: "ATadel93isa"
    }
  });

  transporter.sendMail({
    from: request.body.from,
    to: "contact@edouard-dev.com",
    subject: request.body.subject,
    text: request.body.text,
    html: "<p>" + request.body.text + "</p>"
  });
  response.send("pong");
});
