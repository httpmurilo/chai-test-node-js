'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    severidade: {
        type: String,
        required: false,
        enum:['alta', 'média','baixa','indefinida'],
        default:'indefinida'
    },
    temPrazo: {
        type: Boolean,
        required: true,
    },
    podeSerAdiada: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('TipoTarefa', schema);
