'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nomeDocumento: {
        type: String,
        required: true,
        unique: true
    },
    blob: {
        type: String,
        required: true,
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    tipoDocumento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoDocumento'
    },
});

module.exports = mongoose.model('Pendency', schema);

