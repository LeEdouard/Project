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
      fetch("http://127.0.0.1:8081/mailing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: this.state.mailing.email,
          subject: this.state.mailing.subject,
          text: this.state.mailing.msg
        })
      }).then(resp => console.log(resp));
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
        <h6>
          Utilisation d'un serveur node, et gestion de la requête post dans
          cette api pour envoyer un mail
        </h6>
      </div>
    );
  }
}

export default Projet15;
