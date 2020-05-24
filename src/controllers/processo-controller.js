'use strict';

const mongoose = require('mongoose');
const Processo = mongoose.model('Processo');


exports.buscar = async() => {
   const res = await Cliente.find({
}, 'nome numeroDocumento ativo ');
        return res;
}

exports.buscarPorId = async (id) =>{
   const res = await Cliente
        .findById(id);
    return res;
}
exports.buscarPornome = async (nome) =>{
    const res =  await Cliente
        .find({
            nome: nome,
        }, 'nome numeroDocumento ativo ');
        return res;
 }

exports.create = async (data) => {
    var cliente = new Cliente(data);
    await cliente.save();
}
exports.deletar = async (id) =>{
    await Cliente
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  Cliente
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             numeroDocumento: data.numeroDocumento,
             ativo: data.ativo
         }
     });
 }

