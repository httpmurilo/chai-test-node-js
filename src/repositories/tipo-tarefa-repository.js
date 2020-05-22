'use strict';

const mongoose = require('mongoose');
const TipoTarefa = mongoose.model('TipoTarefa');


exports.get = async() => {
   const res = await TipoTarefa.find({
            }, 'nome severidade temPrazo podeSerAdiada ');
        return res;
}

exports.buscarPorId = async (id) =>{
   const res = await TipoTarefa
        .findById(id);
    return res;
}
exports.create = async (data) => {
    var tipo = new TipoTarefa(data);
    await tipo.save();
}
exports.deletar = async (id) =>{
    await TipoTarefa
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  TipoTarefa
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             severidade: data.severidade,
             temPrazo: data.temPrazo,
             podeSerAdiada: data.podeSerAdiada,
         }
     });
 }

