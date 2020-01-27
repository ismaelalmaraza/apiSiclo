require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URI = process.env.DEV_DB;

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => {
        console.log("Conexion exitosa");
    },
    err => {
        console.log("Ocurrio un error");
        console.log(err.stack);
    }
);