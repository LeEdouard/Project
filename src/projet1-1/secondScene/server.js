const http = require("http");
const nodemailer = require("nodemailer");
const server = http.createServer();

server.listen(8000);

server.on("listening", () => {
  console.log("Serveur démarré !");
});

server.on("request", (request, response) => {
  const { method, url } = request;
  console.log("URL demandée : %s %s", method, url);
  response.end("coucou");
  if (url === "/szBcbzadb7HBc78E6WszBcbzadb7HBc78E6W") {
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "aryanna.toy0@ethereal.email",
        pass: "szBcbzadb7HBc78E6W"
      }
    });

    transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: "aryanna.toy0@ethereal.email",
      subject: "Sujetttttt",
      text: "Message en plain text",
      html: "<b>Message en html</b>"
    });
    console.log("Mail sent");
  }
});
