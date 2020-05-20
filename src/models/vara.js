'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: false,
    },
    endereco: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Vara', schema);
