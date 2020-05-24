'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: {
        type: Number,
        unique: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    polo: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('ProcessoParte', schema);
