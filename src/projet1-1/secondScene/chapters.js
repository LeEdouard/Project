import svg from "./svg";

const chapters = [
  {
    id: 0,
    name: "Introduction",
    bg: "white",
    svg: svg.menuIcons.intro,
    link: "intro",
    color: "black",
    sections: [
      {
        type: "text",
        content:
          "Je commencerais par dire que le contenu ne sera pas détaillé du tout et qu'il ne servira pour l'instant que de démonstration de mes compétences. Je verrais plus tard si j'ai le temps de vraiment rédiger de manière exhaustive mon parcours."
      },
      {
        type: "text",
        content:
          "La formation Développeur Front-End par le GRETA92 est toutes nouvelle. La promo à laquelle j'ai participée n'est que la deuxième depuis sa création. Elle dure un peu plus de deux mois et est sensée nous apprendre assez pour débuter un travail en tant que développeur front-end ou bien d'intégrateur. On apprendra les différents outils et languages informatiques nécessaire à cet objectif."
      },
      {
        type: "text",
        content:
          "La sélection des stagiaires est très diversifiée. On trouve des gens qui sont vraiment néophyte, et on a aussi ceux qui ont déjà travaillé quelques années et qui sont venu pour le module React ou bien pour le Javascript. Cette disparité de niveau n'a peut-être pas toujours eu de cohérence avec le programme imposé, causant certaines déceptions."
      },
      {
        type: "text",
        content:
          "Pour ma part, je me retrouvais au milieu du lot. J'avais déjà passé environs deux mois au total à suivre des tutorial sur le net, notemment via le SiteduZer0. C'était il y a plus de 7 ans et je ne me suis jamais lancé dedans. J'avais appris le HTML/CSS et le PHP avec les base de données mySql. Cependant, c'était un apprentissage \"en vrac \". Personne pour me guider, je ne suivais aucune règle, ni convention d'écriture. J'apprennais simplement au fur et à fur de mes expérimentation sur un site cobaye. Par exemple, je n'avais jamais pas ressenti le besoin de faire des fonctions ou bien coder orienté objet. Je me contentais d'imbriquer des if et for dans des if et for à l'infini..."
      },
      {
        type: "text",
        content:
          "**L'organisation du site n'est pas conforme à la  chronologie du parcours de la formation"
      },

      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      },
      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      }
    ]
  },
  {
    id: 1,
    name: "Linux",
    bg: "black",
    svg: svg.menuIcons.linux,
    link: "linux",
    color: "white",
    sections: [
      {
        type: "text",
        content:
          "Premier jour, on voit comment marche linux et ubuntu. Je n'avais jamais touché auparavant."
      },
      {
        type: "text",
        content:
          "blabla les différences avec windows, les commandes dans le terminal, apache, les vm, etc"
      },

      {
        type: "html",
        content: "cat split-file* > win10_x64.iso"
      },
      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      }
    ]
  },
  {
    id: 2,
    name: "HTMLCSS",
    bg: "linear-gradient(90deg, #F05F26 50%, #24A1E1 50%)",
    svg: svg.menuIcons.htmlcss,
    link: "htmlcss",
    color: "white",
    sections: [
      {
        type: "text",
        content:
          "Leçons html/css. J'ai appris à ne plus utiliser uniquement des div pour tout..."
      },
      {
        type: "text",
        content:
          'blabla découverte du principe de "responsive", les transitions/animations, le référecement, le reste je connaissais plus ou moins '
      },

      {
        type: "html",
        content:
          "<div class='test'>\n  test du module react-syntax-highlighter\n  chaque paragraphe à un type qui affichera un component variable\n</div>"
      },
      {
        type: "css",
        content: "html, body {\n  margin:0;\n  padding:0\n}"
      }
    ]
  },
  {
    id: 3,
    name: "Bootstrap",
    bg: "#563286",
    svg: svg.menuIcons.bootstrap,
    link: "bootstrap",
    color: "white",
    sections: [
      {
        type: "text",
        content:
          "découverte de bootstrap, c'ést quoi, ça sert à quoi, les plus les moins"
      },

      {
        type: "html",
        content:
          "<div class='row'>\n  <div class='col-2'>gauche</div>\n  <div class='col'>droite</div>\n</div>"
      },
      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      }
    ]
  },
  {
    id: 4,
    name: "Javascript",
    bg: "black",
    svg: svg.menuIcons.js,
    link: "javascript",
    color: "#eed633",
    sections: [
      { type: "text", content: "je n'avais jamais touché à javascript" },
      { type: "text", content: "log est mon ami" },
      {
        type: "text",
        content:
          "on a fait de l'algorithmie. je ne me sentais pas trop perdu, avec ce que j'ai pratiqué en php"
      },
      {
        type: "text",
        content:
          "on a vu les fonctions, les classe et constructeurs, le orienté objet"
      },
      { type: "text", content: "on a fait un petit jeu RPG très simple" },

      {
        type: "text",
        content:
          "2e formateur on a vu comment utiliser javascript pour intéragir avec la page même"
      },
      {
        type: "text",
        content:
          "on a vu jquery vite fait, une manière de raccourcir notre code avec cette librairie"
      },

      {
        type: "javascript",
        content: "function check = (e)  {console.log(e)}"
      },
      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      }
    ]
  },
  {
    id: 5,
    name: "ReactJS",
    bg: "#343f47",
    svg: svg.menuIcons.react,
    link: "reactjs",
    color: "#30c7ff",
    sections: [
      { type: "text", content: "découverte de react" },
      {
        type: "text",
        content:
          "comment ça marche, une manière de structurer son code avec les composants"
      },
      { type: "text", content: "l'utilisation de node et de ses modules" },

      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      },
      {
        type: "quote",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      }
    ]
  },
  {
    id: 6,
    name: "Others",
    bg: "black",
    svg: svg.menuIcons.others,
    link: "others",
    color: "white",
    sections: [
      {
        type: "text",
        content:
          "section fourre-tout, adob xd, git, hébergement, node, Hakim, etc..."
      },

      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      },
      {
        type: "chart",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      }
    ]
  },
  {
    id: 7,
    name: "Emploi",
    bg: "white",
    svg: svg.menuIcons.resume,
    link: "emploi",
    color: "black",
    sections: [
      {
        type: "text",
        content: "écrire ici peut être mes objectifs de carrière ?"
      },

      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      },
      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      }
    ]
  },
  {
    id: 8,
    name: "Conclusion",
    bg: "white",
    svg: svg.menuIcons.conclusion,
    link: "conclusion",
    color: "black",
    sections: [
      {
        type: "text",
        content:
          "conclusion de la formation ce que j'en pense, plus, moins, problèmes et suggestions"
      },

      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      },
      {
        type: "text",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem quas, numquam ullam libero aperiam iusto laboriosam, at et, dicta dolor quaerat qui temporibus inventore illum natus enim rerum quia."
      }
    ]
  }
];

export default chapters;
