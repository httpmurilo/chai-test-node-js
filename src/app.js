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

//rota
const varaRouter = require('./routers/vara-router');
const indexRouter = require('./routers/index-router');
const tipoPendenciaRouter = require('./routers/tipoPendencia-router');

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

module.exports = app;
