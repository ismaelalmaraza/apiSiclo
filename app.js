const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const clientes = require('./routes/clientes');

app.use(bodyParser.json());

app.use('/api', clientes);

module.exports = app;