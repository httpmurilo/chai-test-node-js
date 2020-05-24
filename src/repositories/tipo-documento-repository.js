'use strict';

const mongoose = require('mongoose');
const TipoDocumento = mongoose.model('TipoDocumento');


exports.buscar = async() => {
   const res = await TipoDocumento.find({
            }, 'nome');
        return res;
}

exports.buscarPorId = async (id) =>{
   const res = await TipoDocumento
        .findById(id);
    return res;
}
exports.buscarPorNome = async (titulo) =>{
    const res =  await TipoDocumento
        .find({
            titulo: titulo,
        }, 'titulo  ');
        return res;
 }

exports.adicionar = async (data) => {
    var tipo = new TipoDocumento(data);
    await tipo.save();
}
exports.deletar = async (id) =>{
    await TipoDocumento
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  TipoDocumento
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
         }
     });
 }

