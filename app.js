// app.js
const express = require("express");
const app = express();

// Route principale
app.get("/", (req, res) => {
  res.send("Hello World! ✅");
});

// Autre route d'exemple up
app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});


app.get("/yo", (req, res) => {
  res.json({ message: "API is working 🎉" });
});

// 
app.get("/403", (req, res) => {
    res.status(403).json({ message: "You are not authorized here" });
});

module.exports = app;