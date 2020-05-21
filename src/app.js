'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();


//conexao
mongoose.connect(config.connectionString);

//model
const TipoPendencia = require('./models/tipoPendencia');
const Vara = require('./models/vara');
const TipoDocumento  = require('./models/tipoDocumento');
const Cliente= require('./models/cliente');
//rota
const varaRouter = require('./routers/vara-router');
const indexRouter = require('./routers/index-router');
const tipoPendenciaRouter = require('./routers/tipoPendencia-router');
const TipoDocumentoRouter = require('./routers/tipo-documento-router');
const ClienteRouter = require('./routers/cliente-router');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',indexRouter);
app.use('/vara',varaRouter);
app.use('/tipoPendencia',tipoPendenciaRouter);
app.use('/tipoDocumento', TipoDocumentoRouter);
app.use('/clientes', ClienteRouter);

module.exports = app;
