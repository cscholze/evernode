'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server Running');
});


app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
});
