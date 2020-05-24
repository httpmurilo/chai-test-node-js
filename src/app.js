'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();



mongoose.connect(config.connectionString);


const TipoPendencia = require('./models/tipoPendencia');
const Vara = require('./models/vara');
const TipoDocumento  = require('./models/tipoDocumento');
const Cliente= require('./models/cliente');
const PagDoc = require('./models/pagDoc');
const tipoTarefa = require('./models/tipoTarefa');
const tarefa = require('./models/tarefa');
const ProcessoParte = require('./models/ProcessoParte')



const varaRouter = require('./routers/vara-router');
const indexRouter = require('./routers/index-router');
const tipoPendenciaRouter = require('./routers/tipoPendencia-router');
const TipoDocumentoRouter = require('./routers/tipo-documento-router');
const ClienteRouter = require('./routers/cliente-router');
const PagDocRouter = require('./routers/pagdoc-router');
const tipoTarefaRouter = require('./routers/tipo-tarefa-router');
const TarefaRouter = require('./routers/tarefa-router');
const ParteProcessoRouter = require('./routers/processo-parte-router');


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',indexRouter);
app.use('/varas',varaRouter);
app.use('/tipoPendencias',tipoPendenciaRouter);
app.use('/tipoDocumentos', TipoDocumentoRouter);
app.use('/clientes', ClienteRouter);
app.use('/documentos',PagDocRouter);
app.use('/tipoTarefas',tipoTarefaRouter);
app.use('/tarefas',TarefaRouter);
app.use('/partesProcesso',ParteProcessoRouter);

module.exports = app;
