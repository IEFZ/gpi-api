const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


const db = require("./app/models");
db.sequelize.sync();



//analizar solicitudes de tipo de contenido - application/json
app.use(bodyParser.json());

//analizar solicitudes de tipo de contenido - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ mensaje: "gpi-dev pruebas de aplicacion." });
});




// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./app/routes/tutorial.routes")(app);
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}.`);
});

