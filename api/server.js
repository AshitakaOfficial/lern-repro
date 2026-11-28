const express = require("express");

const app = express();

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.method + " " + req.url);
  next();
});

let tasks = [
  { id: 1, title: "Einkaufen", done: false },
  { id: 2, title: "Putzen", done: true },
  { id: 3, title: "Steuer", done: false }
];
let naechsteId = 4;

// GET /tasks – alle Aufgaben
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// GET /tasks/:id – eine Aufgabe
app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Aufgabe nicht gefunden" });
  }

  res.status(200).json(task);
});

// POST /tasks – neue Aufgabe anlegen
app.post("/tasks", (req, res) => {
  const title = req.body.title;

  if (!title) {
    return res.status(400).json({ message: "title fehlt" });
  }

  const neueAufgabe = { id: naechsteId, title: title, done: false };
  naechsteId = naechsteId + 1;
  tasks.push(neueAufgabe);

  res.status(201).json(neueAufgabe);
});

// DELETE /tasks/:id – Aufgabe löschen
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Aufgabe nicht gefunden" });
  }
  tasks = tasks.filter(t => t.id !== id);
  res.status(200).json(task)
});

app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});