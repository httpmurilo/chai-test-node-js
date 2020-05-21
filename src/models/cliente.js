'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    numeroDocumento: {
        type: String,
        required: true,
    },
    ativo: {
        type: Boolean,
        required: false,
    }
});

module.exports = mongoose.model('Cliente', schema);

