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

  componentDidMount() {
    document.getElementsByClassName("contact")[0].classList.add("opacityZero");
    setTimeout(() => {
      document
        .getElementsByClassName("contact")[0]
        .classList.remove("opacityZero");
    }, 0);
  }
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

  submit = async e => {
    e.preventDefault();
    const errMsg = this.check();
    this.setState({ error: errMsg || {} });
    if (!errMsg) {
      // ici le code si check true
      console.log("check success");
      fetch(
        "https://mysterious-bayou-69637.herokuapp.com/szBcbzadb777HBc78E6W",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: this.state.mailing.email,
            subject: this.state.mailing.subject,
            text: this.state.mailing.msg
          })
        }
      ).then(resp => console.log(resp));
    }
  };

  change = e => {
    const newMailing = { ...this.state.mailing };
    newMailing[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ mailing: newMailing });
  };
  render() {
    return (
      <div className="contact text-dark">
        <form onSubmit={this.submit} className="">
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
            label="Message"
            error={this.state.error.msg}
          />
          <button type="submit" className="form-control btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default Projet15;
