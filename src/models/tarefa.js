'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: Number,
    },
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: false,
    },
    alocadoPara: {
        type: String,
        required: true,
    },
    criadoPor: {
        type: String,
        required : true,
    },
    dataDeCriacao: {
        type: Date,
        required: true,
    },
    dataPrevista: {
        type: Date,
        required: true,
    },
    tipoTarefa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoTarefa'
    },
});


module.exports = mongoose.model('Tarefa',schema);