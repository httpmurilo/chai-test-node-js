'use strict';

const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');


exports.buscar = async() => {
   const res = await Processo.find({
        }, '');
        return res;
}

exports.buscarPorId = async (id) =>{
   const res = await Processo
        .findById(id);
    return res;
}

exports.adicionar = async (data) => {
    var processo = new Processo(data);
    await processo.save();
}
exports.deletar = async (id) =>{
    await Processo
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  Processo
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             numeroDocumento: data.numeroDocumento,
             ativo: data.ativo
         }
     });
 }

