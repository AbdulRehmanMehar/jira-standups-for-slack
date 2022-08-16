const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('express app running');
});

module.exports = app;
