'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('TipoDoc', schema);

