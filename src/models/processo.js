'use strict'

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const schema = new Schema({
    ordenador: {
        type: Number,
        unique: true  
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
        ref: 'ProcessoParte',
        //retirar false e setar como true, teste
        required : false
    },
    vara: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vara'
    },
});

schema.plugin(AutoIncrement,{inc_field: 'ordenador'});
module.exports = mongoose.model('Processo',schema);
