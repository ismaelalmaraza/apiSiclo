const express = require('express');
const api = express.Router();
const clienteCtrl = require('../controllers/clientes');

api.get('/clientes', clienteCtrl.index);
api.post('/clientes', clienteCtrl.store);
api.put('/clientes/:id', clienteCtrl.updateEmailClient);
api.put('/clientes/balance/:email', clienteCtrl.updateClient_balance);
api.put('/clientes/classes/:email', clienteCtrl.updateClient_classes);

module.exports = api;