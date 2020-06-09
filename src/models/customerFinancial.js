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
        ref: 'Customer',
        required : true
    },
    valorEntrada: {
        type: Number,
        required: true
    },
    dataLancamento:{
        type : Date,
        required:true,  
        default :Date.now
    }
});
module.exports = mongoose.model('CustomerFinancial', schema);
