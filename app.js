// app.js
const express = require("express");
const app = express();

// Route principale
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Autre route d'exemple up
app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});

module.exports = app;