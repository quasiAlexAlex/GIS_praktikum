const express = require("express");
const mongoose = require("mongoose");
const werteRouter = require("./routes/werte");

const app = express();

// Statische Dateien bereitstellen
app.use(express.static("public"));

// EJS als Template-Engine setzen
app.set("view engine", "ejs");

// JSON-Parsing-Middleware
app.use(express.json());

// MongoDB-Verbindung herstellen
mongoose.connect("mongodb://localhost:27017/testdb");

const db = mongoose.connection;
db.on("error", (error) => console.error("Verbindungsfehler:", error));
db.once("open", () => console.log("Verbunden mit der Datenbank"));

// Routen
app.use("/werte", werteRouter);

// Server starten
app.listen(3000, () => {
  console.log("Server gestartet auf Port 3000");
});
