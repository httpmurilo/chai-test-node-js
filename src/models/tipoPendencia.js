'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true,
    },
    pendenciaDeDocumentos: {
        type: Boolean,
        required: false,
    },
    pendenciaFinanceira: {
        type: Boolean,
        required: false,
    },
});

module.exports = mongoose.model('TipoPendencia', schema);

