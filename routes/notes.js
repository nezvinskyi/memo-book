const router = require('express').Router();
const notes = require('../data/notes');

router.get('/', (req, res) => {
  res.send(notes);
});

module.exports = router;
