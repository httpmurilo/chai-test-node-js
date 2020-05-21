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
    Cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
});

module.exports = mongoose.model('PagDoc', schema);

