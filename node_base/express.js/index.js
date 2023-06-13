/*
HOW TO START

express è utile per gestire richieste e fare routing in maniera efficiente

- npm init -y
- installare express da npm , nodemon 
- import express
- gestire richieste varie
*/

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.send("prodotti");
});

app.get("/contatti", (req , res) => {
    res.send('<h1>Contatti</h1>')
})

app.all("*", (req, res) => {
  res.send(`<h1>risorsa non trovata</h1>`);
});

app.listen(3000);
