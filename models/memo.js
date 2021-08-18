const { model } = require('mongoose');

const { memoSchema } = require('./schemas');

const Memo = model('Memo', memoSchema);

module.exports = Memo;
