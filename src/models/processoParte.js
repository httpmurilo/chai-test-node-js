'use strict'

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;


const schema = new Schema({
    ordenador: {
        type: Number,
        unique: true  
    },
    nome: {
        type: String,
        required: true,
    },
    polo: {
        type: String,
        required: false,
    },
    processo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Processo',
        required : true
    },
});
schema.plugin(AutoIncrement,{inc_field: 'ordenador'});
module.exports = mongoose.model('ProcessoParte', schema);
