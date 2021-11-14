const path = require('path');
const morgan = require('morgan');
const express = require('express');

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(path.resolve(__dirname, '..', 'api', 'public')));

app.post('/sample', (req, res) => {
  console.log(req.body);

  res.end('Request was handled successfully');
});

module.exports = app;
