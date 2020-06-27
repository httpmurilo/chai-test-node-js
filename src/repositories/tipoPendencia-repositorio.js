'use strict';

const mongoose = require('mongoose');
const TipoPendenca = mongoose.model('TipoPendencia');


exports.buscar = async() => {
   const res = await TipoPendenca.find({
            }, 'titulo descricao pendenciaDeDocumentos pendenciaFinanceira podeSerAdiada');
        return res;
}

exports.buscarPorId = async (id) =>{
   const res = await TipoPendenca
        .findById(id);
    return res;
}
exports.buscarPorNome = async (titulo) =>{
    const res =  await TipoPendenca
        .find({
            titulo: titulo,
        }, 'titulo descricao endereco');
        return res;
 }

exports.adicionar = async (data) => {
    var tipo = new TipoPendenca(data);
    await tipo.save();
}
exports.deletar = async (id) =>{
    await TipoPendenca
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  TipoPendenca
         .findByIdAndUpdate(id,{
             $set:{
             titulo: data.titulo,
             descricao: data.descricao,
             pendenciaDeDocumentos: data.pendenciaDeDocumentos,
             pendenciaFinanceira: data.pendenciaFinanceira,
             podeSerAdiada: data.podeSerAdiada,
         }
     });
 }

