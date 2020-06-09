'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();
//logger
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');



mongoose.connect(config.connectionString);


const TipoPendencia = require('./models/tipoPendencia');
const Vara = require('./models/vara');
const TipoDocumento  = require('./models/tipoDocumento');
const Costumer= require('./models/customer');
const PagDoc = require('./models/pagDoc');
const tipoTarefa = require('./models/tipoTarefa');
const tarefa = require('./models/task');
const ProcessoParte = require('./models/ProcessoParte')
const Processo = require('./models/Processo');
const CustomerFinancial = require('./models/customerFinancial');

const varaRouter = require('./routers/vara-router');
const indexRouter = require('./routers/index-router');
const tipoPendenciaRouter = require('./routers/tipoPendencia-router');
const TipoDocumentoRouter = require('./routers/tipo-documento-router');
const CustomerRouter = require('./routers/cliente-router');
const PagDocRouter = require('./routers/pagdoc-router');
const tipoTarefaRouter = require('./routers/tipo-tarefa-router');
const TaskRouter = require('./routers/task-router');
const ParteProcessoRouter = require('./routers/processo-parte-router');
const ProcessoRouter = require('./routers/processo-router');
const CostumerFinancialRouter = require('./routers/customer-financial-router');
//arquivo do log
// create a write stream (in append mode)
const  accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 501 }
  }))
  
  // log all requests to access.log
  app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
  }))
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
app.use('/customer', CustomerRouter);
app.use('/documentos',PagDocRouter);
app.use('/tipoTarefas',tipoTarefaRouter);
app.use('/task',TaskRouter);
app.use('/partesProcesso',ParteProcessoRouter);
app.use('/processos', ProcessoRouter);
app.use('/customerFinancial',CostumerFinancialRouter);

module.exports = app;
