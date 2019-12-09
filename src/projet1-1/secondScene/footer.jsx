import React, { Component } from "react";
// import Input from "./input";
// import Joi from "@hapi/joi";
// import TextArea from "./textarea";
// import http from "http";
// import express from "express";
// import nodemailer from "nodemailer";
// import axios from "axios";
// const email = require("emailjs");

class Footer extends Component {
  state = {
    buildingTransform: "rotateX(-90deg) skewX(20deg)",
    rotate: 90,
    skew: 20,
    skew2: 40,
    mailing: {
      email: "",
      subject: "",
      msg: ""
    },
    error: {}
  };

  scrolling = () => {
    const ccc = document
      .getElementsByTagName("footer")[0]
      .getBoundingClientRect();

    if (
      ccc.y + ccc.height + window.scrollY >= window.scrollY + 100 &&
      ccc.y + window.scrollY <= window.scrollY - 100 + window.innerHeight
    ) {
      this.setState({ rotate: 0, skew: 0, skew2: 0 });
    } else {
      this.setState({ rotate: 90, skew: 20, skew2: 40 });
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.scrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrolling);
  }

  // check = () => {
  //   const checkRules = Joi.object({
  //     email: Joi.string().email({
  //       minDomainSegments: 2
  //     }),
  //     subject: Joi.string().min(5),
  //     msg: Joi.string().min(5)
  //   });
  //   const result = checkRules.validate(this.state.mailing, {
  //     abortEarly: false
  //   });
  //   console.log(result);

  //   if (!result.error) return null;

  //   const errors = {};
  //   for (let item of result.error.details) {
  //     if (item.type === "any.empty") {
  //       errors[item.path[0]] = "Veuillez remplir le champs";
  //     }
  //     if (item.type === "string.email") {
  //       errors[item.path[0]] = "Adresse e-mail non valide";
  //     }
  //     if (item.type === "string.min") {
  //       errors[item.path[0]] = "Ecrivez au moins 5 lettres !";
  //     }
  //   }
  //   return errors;
  // };

  submit = e => {
    e.preventDefault();
    const errMsg = this.check();
    this.setState({ error: errMsg || {} });
    if (!errMsg) {
      // ici le code si check true
      console.log("check success");

      // axios.post("smtp.ethereal.email:587", {
      //   Username: "aryanna.toy0@ethereal.email",
      //   Password: "szBcbzadb7HBc78E6W"
      // });
      //
      //
      //

      // const server = http.createServer();

      // server.listen(4000, "localhost");

      // server.on("listening", () => {
      //   console.log("Serveur démarré !");
      // });

      // server.on("request", (request, response) => {
      //   console.log(true);
      // });

      // let transporter = nodemailer.createTransport({
      //   host: "smtp.ethereal.email",
      //   port: 587,
      //   secure: false,
      //   auth: {
      //     user: "aryanna.toy0@ethereal.email",
      //     pass: "szBcbzadb7HBc78E6W"
      //   }
      // });

      // transporter.sendMail({
      //   from: '"Fred Foo 👻" <foo@example.com>',
      //   to: "aryanna.toy0@ethereal.email",
      //   subject: "Sujetttttt",
      //   text: "Message en plain text",
      //   html: "<b>Message en html</b>"
      // });

      // console.log("Message sent: %s", info.messageId);
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // const server = email.server.connect({
      //   user: "aryanna.toy0@ethereal.email",
      //   password: "szBcbzadb7HBc78E6W",
      //   host: "smtp.ethereal.email",
      //   ssl: true
      // });
      // server.send(
      //   {
      //     text: "i hope this works",
      //     from: "you <username@your-email.com>",
      //     to: "aryanna.toy0@ethereal.email",
      //     subject: "testing emailjs"
      //   },
      //   function(err, message) {
      //     console.log(err || message);
      //   }
      // );
    }
  };

  change = e => {
    const newMailing = { ...this.state.mailing };
    newMailing[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ mailing: newMailing });
  };

  render() {
    const buildings = this.props.buildings;
    return (
      <footer red="form" name="form" className="row m-0">
        <div className="col p-0">
          <div className="row justify-content-center m-0">
            <div
              style={{
                transform: `rotateX(${this.state.rotate}deg) skew(${this.state.skew2}deg)`
              }}
              className="building col-1 p-0 m-0"
              dangerouslySetInnerHTML={{
                __html: buildings.un
              }}
            ></div>
            <div
              style={{
                transform: `rotateX(${this.state.rotate}deg) skew(${this.state.skew}deg)`
              }}
              className="building col-1 p-0 m-0"
              dangerouslySetInnerHTML={{
                __html: buildings.deux
              }}
            ></div>
            <div
              style={{
                transform: `rotateX(${this.state.rotate}deg) skew(-${this.state.skew}deg)`
              }}
              className="building col-1 p-0 m-0"
              dangerouslySetInnerHTML={{
                __html: buildings.trois
              }}
            ></div>
            {/* <div
              style={{
                transform: `rotateX(${this.state.rotate}deg) skew(-${this.state.skew2}deg)`
              }}
              className="building col-1 p-0 m-0"
              dangerouslySetInnerHTML={{
                __html: buildings.quatre
              }}
            ></div> */}
          </div>
          <div className="w-100 bg-white text-dark justify-content-center">
            contact@edouard-dev.com
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
