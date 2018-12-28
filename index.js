const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const mysql = require("mysql");
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "colegio"
});

//Importanto a rota
const professores = require("./routes/professores");

app.use(bodyParser.urlencoded({ extended: false }));

const dependencies = {
  connection
};

app.use(express.static("public"));

//Pagina inicial
app.get("/", (req, res) => res.render("home"));

app.use("/professores", professores(dependencies));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

connection.connect(() => {
  app.listen(port, () => console.log("Listening on port => " + port));
});
