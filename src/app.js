'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();
const cors = require('cors') 
//logger
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');



mongoose.connect(config.connectionString);


const TipoPendencia = require('./models/tipoPendencia');
const Vara = require('./models/vara');
const TypeDoc  = require('./models/tipoDoc');
const Cliente= require('./models/Cliente');
const PagDoc = require('./models/pagDoc');
const tipoTarefa = require('./models/tipoTarefa');
const tarefa = require('./models/task');
const ProcessoParte = require('./models/ProcessoParte')
const Processo = require('./models/Processo');
const FinanceiroCliente = require('./models/FinanceiroCliente');

const varaRota= require('./routers/vara-rota');
const indexRota= require('./routers/index-rota');
const tipoPendenciaRota= require('./routers/tipoPendencia-rota');
const TipoDocRota= require('./routers/tipoDoc-rota');
const ClienteRota = require('./routers/cliente-rota');
const PagDocRota= require('./routers/pagdoc-rota');
const tipoTarefaRota= require('./routers/tipoTarefa-rota');
const TaskRota= require('./routers/tarefa-rota');
const ParteProcessoRota= require('./routers/processo-parte-rota');
const ProcessoRota= require('./routers/processo-rota');
const FinanceiroClienteRota = require('./routers/financeiro-cliente-rota');
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
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); app.use(cors())
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',indexRota);
app.use('/varas',varaRota);
app.use('/tipoPendencias',tipoPendenciaRota);
app.use('/tipoDoc', TipoDocRota);
app.use('/clientes', ClienteRota);
app.use('/documentos',PagDocRota);
app.use('/tipoTarefas',tipoTarefaRota);
app.use('/task',TaskRota);
app.use('/partesProcesso',ParteProcessoRota);
app.use('/processos', ProcessoRota);
app.use('/financeiroCliente',FinanceiroClienteRota);

module.exports = app;
