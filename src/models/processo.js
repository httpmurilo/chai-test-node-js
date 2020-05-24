'use strict'

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const schema = new Schema({
    ordenador: {
        type: Number    
    },
    numero: {
        type: String,
        required: true,
    },
    classe: {
        type: String,
        required: false,
    },
    dataDeCadastro: {
        type: Date,
        required: false,
    },
    advogado: {
        type: String,
        required: true,
    },
    processoParte: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProcessoParte'
    },
    vara: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vara'
    },
});


module.exports = mongoose.model('Processo',schema);