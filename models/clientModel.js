const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: 'El nombre del cliente es obligatorio'
    },
    email: {
        type: String,
        required: 'El email es obligatorio'
    },
    balance: {
        type: Number,
        required: 'Calcule el balance',
    },
    classes: {
        type: String,
        required: 'Clase a la que esta inscrito'
    }
}, {
    timestamps: true
});

const Cliente = mongoose.model('cliente', clientSchema);
module.exports = Cliente;