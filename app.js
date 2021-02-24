require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { chocolates } = require('./data.js');

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    Documentation: 'Type in /data to see the list!',
  });
});

app.get('/data', (req, res) => {
  res.json({ results: chocolates });
});

app.get('/data/:id', (req, res) => {
  const id = Number(req.params.id);
  const chocolateItem = chocolate.find((choco) => choco.id === id);
  res.json({
    results: chocolateItem,
  });
});

module.exports = {
  app,
};
