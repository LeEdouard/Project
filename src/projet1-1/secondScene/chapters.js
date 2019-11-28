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
          "Je commencerai par dire que le contenu ne sera pas détaillé du tout et qu'il ne servira pour l'instant que de démonstration de mes compétences."
      },
      {
        type: "text",
        content:
          "La formation Développeur Front-End par le GRETA du 92 est toute nouvelle. Elle dure un peu plus de deux mois et est sensée nous apprendre les bases des métiers de développeur front-end et d'intégrateur."
      },
      {
        type: "text",
        content:
          "La sélection des stagiaires est très diversifiée. On trouve des gens qui sont vraiment débutants, et on a aussi ceux qui ont déjà travaillé quelques années et qui sont venu pour le module React ou bien pour le JavaScript. "
      },
      {
        type: "text",
        content:
          "Pour ma part, je voulais revoir le HTML/CSS et apprendre le JavaScript. J'avais déjà passé du temps à me former au HTML/CSS et au PHP/MySQL sur internet. Cependant, je ne suivais aucune convention d'écriture, et mon code manquait de structure. J'apprenais simplement au fur et à mesure de mes expérimentations."
      },
      {
        type: "text",
        content:
          "Grâce à cette formation, j'ai beaucoup appris et me suis habitué à utiliser les bonnes pratiques. Ce site, lui-même un exemple de cette évolution, présente succintement les différentes technologies que j'ai appris à maîtriser durant la formation.          "
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
          "Au début, nous avons eu un cours sur Linux. J'ai eu l'occasion d'apprendre les commandes Bash, les spécificités de Linux / Ubuntu, et plus généralement  d'évoluer dans cet environnement."
      },

      {
        type: "html",
        content:
          "split -b 100M image.iso split-file\ncat split-file* > win10_x64.iso"
      },
      {
        type: "text",
        content:
          "Nous avons vu l'installation de machines virtuelles, et survolé la technologie Apache."
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
      },
      {
        type: "text",
        content:
          "Durant le module html / css, il s'est avéré que'il s'agissait plus pour moi d'approfondir les concept déjà connus que d'en découvrir de nouveaux (new p les truc appris)"
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
        type: "bar",
        content: `{
          "maxValue": "100",
          "data": [
            {
              "id": "0",
              "label": "Chocolatine",
              "value": "50",
              "bgColor": "blue",
              "color": "white"
            },
            {
              "id": "1",
              "label": "Pain au chocolat",
              "value": "75",
              "bgColor": "red",
              "color": "white"
            }
          ]
        }`
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
          "blabla la disparité de niveau n'a peut-être pas toujours eu de cohérence avec le programme imposé, causant certaines déceptions.(reformuler positif)"
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
