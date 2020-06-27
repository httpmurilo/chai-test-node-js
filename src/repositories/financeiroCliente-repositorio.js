'use strict';

const mongoose = require('mongoose');
const FinanceiroCliente = mongoose.model('FinanceiroCliente');


exports.obter = async() => {
   const res = await FinanceiroCliente.find({},'titulo descricao valorEntrada cliente dataLancamento status')
    .populate('cliente', 'nome');
        return res;
}

exports.obterPorId = async (id) =>{
   const res = await FinanceiroCliente
        .findById(id);
    return res;
}

exports.adicionar = async (data) => {
    var cus = new FinanceiroCliente(data);
    await cus.save();
}
exports.deletar = async (id) =>{
    await FinanceiroCliente
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  FinanceiroCliente
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             numeroDocumento: data.numeroDocumento,
             ativo: data.ativo
         }
     });
 }

