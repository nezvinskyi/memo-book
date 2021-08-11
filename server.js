const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
