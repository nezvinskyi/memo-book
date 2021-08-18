const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/v1/users', routes.users);
app.use('/api/v1/memos', routes.memos);

// app.get('/api/notes/:id', (req, res) => {
//   const { id } = req.params;
//   const note = notes.find(n => n._id === id);
//   res.send(note);
// });

// app.use((_, res) => {
//   res.status(404).json({ message: 'Not found' });
// });

app.use(notFound);

// app.use((err, _, res, __) => {
//   const { code = 500, message = 'Server error' } = err;
//   res.status(code).json({ message });
// });

app.use(errorHandler);

module.exports = app;
