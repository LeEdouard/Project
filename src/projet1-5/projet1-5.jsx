import React, { Component } from "react";
import Joi from "@hapi/joi";
import Input from "./input";
import TextArea from "./textarea";

class Projet15 extends Component {
  state = {
    mailing: {
      email: "",
      subject: "",
      msg: ""
    },
    error: {}
  };

  check = () => {
    const checkRules = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2
      }),
      subject: Joi.string().min(5),
      msg: Joi.string().min(5)
    });
    const result = checkRules.validate(this.state.mailing, {
      abortEarly: false
    });
    console.log(result);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) {
      if (item.type === "any.empty") {
        errors[item.path[0]] = "Veuillez remplir le champs";
      }
      if (item.type === "string.email") {
        errors[item.path[0]] = "Adresse e-mail non valide";
      }
      if (item.type === "string.min") {
        errors[item.path[0]] = "Ecrivez au moins 5 lettres !";
      }
    }
    return errors;
  };

  submit = e => {
    e.preventDefault();
    const errMsg = this.check();
    this.setState({ error: errMsg || {} });
    if (!errMsg) {
      // ici le code si check true
      console.log("check success");

      fetch(
        "https://mysterious-bayou-69637.herokuapp.com/szBcbzadb7HBc78E6WszBcbzadb7HBc78E6W",
        {
          method: "POST",
          mode: "no-cors",
          cache: "no-cache",
          credentials: "same-origin",
          transporter: {
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: "aryanna.toy0@ethereal.email",
              pass: "szBcbzadb7HBc78E6W"
            }
          },
          mail: {
            from: '"Fred Foo 👻" <foo@example.com>',
            to: "aryanna.toy0@ethereal.email",
            subject: "Sujetttttt",
            text: "Message en plain text",
            html: "<b>Message en html</b>"
          }
        }
      );
    }
  };

  change = e => {
    const newMailing = { ...this.state.mailing };
    newMailing[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ mailing: newMailing });
  };
  render() {
    return (
      <div className="contact">
        <form
          onSubmit={this.submit}
          className="col contact border border-danger p-3 mx-auto"
        >
          <h1>Contact</h1>
          <Input
            name="email"
            value={this.state.mailing.email}
            onChange={this.change}
            label="Adresse E-mail"
            error={this.state.error.email}
          />
          <Input
            name="subject"
            value={this.state.mailing.subject}
            onChange={this.change}
            label="Sujet"
            error={this.state.error.subject}
          />
          <TextArea
            name="msg"
            value={this.state.mailing.msg}
            onChange={this.change}
            label="Sujet"
            error={this.state.error.msg}
          />
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default Projet15;
