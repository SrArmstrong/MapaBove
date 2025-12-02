const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    Mensaje: "API running111",
    ColorActual: process.env.ACTIVE_COLOR || "not-set"
  });
});

app.get("/events", (req, res) => {
  res.json([
    { id: 1, name: "Evento desde la API" }
  ]);
});

app.post("/events", (req, res) => {
  res.status(201).json({
    id: Date.now(),
    ...req.body
  });
});

module.exports = app;
