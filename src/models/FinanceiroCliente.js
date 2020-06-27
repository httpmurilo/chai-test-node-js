'use strict'

const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;


const schema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: false,
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required : true
    },
    valorEntrada: {
        type: Number,
        required: true
    },
    dataLancamento:{
        type : Date,
        required:false,  
        default :Date.now
    },
    status:{
        type: String,
        required: true,
        enum: ['Não Pago','Pendente','Pago'],
        default : 'Pendente'
    }
});
module.exports = mongoose.model('FinanceiroCliente', schema);

