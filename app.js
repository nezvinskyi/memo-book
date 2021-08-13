const express = require('express');
const cors = require('cors');
const notes = require('./data/notes');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/notes', (req, res) => {
  res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  const note = notes.find(n => n._id === id);
  res.send(note);
});

module.exports = app;
