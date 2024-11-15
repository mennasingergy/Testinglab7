
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});

module.exports = app;
