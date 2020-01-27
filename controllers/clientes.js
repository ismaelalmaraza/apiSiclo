const Cliente = require('../models/clientModel');
const clienteSrv = require('../services/service');
module.exports = {
    index(req, res) {
        Cliente.find({}, (err, clientes) => {
            return res.status(200).send({ data: clientes });
        })
    },
    store(req, res) {
        const clienteProperties = req.body;
        Cliente.create(clienteProperties).then(
            cliente => res.status(201).send({ data: cliente })
        )
    },
    updateEmailClient(req, res, nex) {
        const clienteProperties = req.body;
        Cliente.findByIdAndUpdate({ _id: req.params.id }, { email: clienteProperties.email }, { new: true })
            .then(cliente => {
                if (!cliente) {
                    return res.status(404).send("Not found");
                }
                res.status(200).send({ data: cliente });
            }).catch(next);
    },
    updateClient_balance(req, res) {
        let newBalance = clienteSrv.get_cliente_shop();
        Cliente.findOneAndUpdate({ email: req.params.email }, { balance: newBalance }, { new: true })
            .then(cliente => {
                if (!cliente) {
                    return res.status(404).send("Not found");
                }
                res.status(200).send({ data: cliente });
            });
    },
    updateClient_classes(req, res) {
        let newClasse = clienteSrv.get_cliente_classes(~~(Math.random() * 5));
        Cliente.findOneAndUpdate({ email: req.params.email }, { classes: newClasse }, { new: true })
            .then(cliente => {
                if (!cliente) {
                    return res.status(404).send("Not found");
                }
                res.status(200).send({ data: cliente });
            });
    }
}