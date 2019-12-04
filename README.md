# Project

## Visible sur https://edouard-dev.com

##### Outils utilisés

ReactJS, Nodejs, Bootstrap, FontAwesome, chart.js, nodemailer, joi, express, mongoose/MongoDB, git/GitHub

### Projet1

Parcours de la formation GRETA commencé le 20 septembre 2019 et qui finit le 2 décembre  
Le contenu est surtout un prétexte pour faire autre chose que le fil rouge proposé par la formation.  
J'avais commencé cette partie là avant même le "main",  
mais comme je me suis rendu compte que je n'avais pas envie de passer du temps à faire de la rédaction,  
que j'avais plus envie d'écrire du code,  
et que je ne voyais plus trop d'autres chose à rajouter, à moins de tout revoir l'idée même ,  
je me suis mis à essayer d'autres choses

key code:

```
// effect apparition/disparition
scrollFade = () => {
  const elementStats = document
    .getElementById(this.props.chapter.id)
    .getBoundingClientRect();
  if (
    elementStats.y + elementStats.height + window.scrollY >=
      window.scrollY + 100 &&
    elementStats.y + window.scrollY <=
      window.scrollY - 100 + window.innerHeight
  ) {
    this.setState({ visible: true });
  } else {
    this.setState({ visible: false });
  }
};
```

```
// composant variable
import TypePlain from "./typePlain";
import TypeCode from "./typeCode";
import TypeQuote from "./typeQuote";
import TypeChart from "./typeChart";

...

const { type, content } = this.props;

const types = {
  text: TypePlain,
  html: TypeCode,
  css: TypeCode,
  javascript: TypeCode,
  quote: TypeQuote,
  bar: TypeChart
};
const CompVar = types[type];
return (
  <section>
    <CompVar content={content} type={type} />
  </section>
);
```

```
<FontAwesomeIcon
  icon={faCloud}
  className="cloud cloud2"
  style={{
    left: (this.state.cloudLeft - 20) * 2 + "%",
  }}
/>
<FontAwesomeIcon
  icon={faCloud}
  className="cloud"
  style={{
    left: this.state.cloudLeft * 0.5 + "%",
  }}
/>
<FontAwesomeIcon
  icon={faCloud}
  className="cloud cloud3"
  style={{
    left: this.state.cloudLeft + 15 + "%",
  }}
/>
```

### Main (un hub des différents tests/projets fait durant la formation GRETA)

Le but du main était de créer d'autres projets sans avoir à tous recréer les dossiers de bases,
ainsi que, et surtout, un accès plus rapide aux précédents projets si jamais j'ai besoin de revoir une fonctionnalité ou bien du code.
J'ai eu ensuite l'idée de créer un faux terminal unix, pour faire style "oui le mec il écrit dans de l'écran noir, c'est un vrai..."
J'y ai mis 2-3 fonctionnalités basiques, similaire au vrai bash, histoire d'amuser les quelques curieux.

key code:

```
const project = this.props.project;
return (
  <DelayLink
    delay={500}
    to={`/${project.link}`}
    clickAction={this.props.fadeOut}
  >
    <div id={project.id} className={project.className}>
      {project.label}
    </div>
  </DelayLink>
);
```

### Projet2(3?)

J'ai décidé d'essayer un système de filtre et tri en utilisant du json aléatoire trouvé sur internet.
Cette fois si j'avais décidé de ne pas m'atteler sur les spécificités react, et simplement faire du JS.
Je verrais plus tard que comme j'ai quand même utilisé react à la toute base,
il y aura des problèmes de re-rendering à cause de l'utililisation des states,
problème auquel j'ai vu la solution plus tard avec le projet3

key code:

```
// filtre + effet
for (const elem of unitList) {
  if (
    elem.attributes["data-drug"].value
      .toLowerCase()
      .includes(this.state.input.toLowerCase()) ||
    elem.attributes["data-company"].value
      .toLowerCase()
      .includes(this.state.input.toLowerCase())
  ) {
    elem.style["opacity"] = "1";
    elem.style["height"] = "3.15rem";
    elem.style["border"] = "1px solid black";
    counting = counting + 1;
  } else {
    elem.style["opacity"] = "0";
    elem.style["height"] = "0em";
    elem.style["border"] = "none";
  }
}
```

### Projet3

Test de l'utilisation de la librairie chart.js, sous le thème d'un log de progression.
La librairire est facile à utiliser. Le challenge se trouve sur le formulaire pour faire toutes les modifications en mode react.

key code:

```

```

### Projet4

Cette fois-ci j'ai choisi de repartir plus sur du visuel. J'ai décidé de reprendre le style du "one-page-scroll".
J'ai vu qu'il existait des librairies pour faire ça en quelques lignes,
mais contrairement au projet précédement qui exigeait beaucoup si on voulait faire tout à la main,
cette fonctionnalité-ci semblait être à ma portée, j'ai donc procédé sans librairie pour voir comment ça marchait.
Après avoir fini, j'ai rajouté un tracker sur chaque section afin de voir laquelle a plus ou moins d'impact

key code :

```
// screen scroll down
goDownOne = () => {
  let allSections = document.getElementsByTagName("section");
  let nextPosition =
    this.state.currentSection < 10
      ? allSections[this.state.currentSection + 1].getBoundingClientRect().y +
        window.scrollY
      : allSections[this.state.currentSection].getBoundingClientRect().y +
        window.scrollY;
  window.scrollTo(0, nextPosition);
  if (this.state.currentSection < 10) {
    this.setState({ currentSection: this.state.currentSection + 1 });
  }
};
```

```
// timer per section
setInterval(() => {
  let newTimer = [...this.state.timer];
  newTimer[this.state.currentSection] =
    Math.round((newTimer[this.state.currentSection] + 0.1) * 10) / 10;
  this.setState({ timer: newTimer });
}, 100);
```

### Projet5

Création d'un server node, et mettre tous mes api dedans.
Envoie d'un formulaire de contacten method post vers l'api qui lui enverra le mail avec les données reçu.

key code:

```
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
```

```
app.post("/szBcbzadb777HBc78E6W", (request, response) => {
  let transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: true,
    auth: {
      user: emailLog,
      pass: emailPwd
    }
  });
  transporter.sendMail({
    from: request.body.from,
    to: "contact@edouard-dev.com",
    subject: request.body.subject,
    text: request.body.text,
    html: "<p>" + request.body.text + "</p>"
  });
});
```

#### (Projet3)

Utilisation de mongoDB(mongoose) sur le serveur node, tout marche nickel. Reste à faire un système de compte (voir comment gérer les cookies)

key code:

```
componentDidMount() {
  fetch("https://mysterious-bayou-69637.herokuapp.com/df6g54sd65f4g6sd5fg9")
    .then(fetchedData => fetchedData.json())
    .then(jsoned => this.setState({ exercices: jsoned.body.exos }))
    .then(() => this.setState({ select: this.state.exercices[0].id }))
    .catch(() => console.log("error"));
}
updateToJson = data => {
  fetch(
    "https://mysterious-bayou-69637.herokuapp.com/dfbn65i4dfv4z6er654ze9",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ exos: data })
    }
  ).then(resp => console.log(resp));
};
```

```
app.get("/df6g54sd65f4g6sd5fg9", (request, response) => {
  User.findById(request.id)
    .then(foundUser => response.send({ body: foundUser }))
    .catch(error => response.send(error));
});
app.post("/dfbn65i4dfv4z6er654ze9", (request, response) => {
  User.findByIdAndUpdate(request.id, {
    exos: [...request.exos]
  })
    .then(updatedUser => console.log("UPDATED", updatedUser))
    .catch(error => console.log(error));
});

```

### (Idées)

-voir comment marche graphql
