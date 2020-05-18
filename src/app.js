'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexao
mongoose.connect('mongodb+srv://mongouser:FAJ6coj1@cluster0-hsu3w.azure.mongodb.net/test?retryWrites=true&w=majority');

//model
const TipoPendencia = require('./models/tipoPendencia');
const Vara = require('./models/vara');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

