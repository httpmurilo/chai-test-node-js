'use strict';

const mongoose = require('mongoose');
const ProcessoParte = mongoose.model('ProcessoParte');


exports.buscar = async() => {
   const res = await ProcessoParte.find({
            },'');
        return res;
}

exports.buscarPorId = async (id) =>{
   const res= await ProcessoParte
        .findOne(ordenador);
    return res;
}

exports.adicionar = async (data) => {
    var parte = new ProcessoParte(data);
    await parte.save();
}
exports.deletar = async (id) =>{
    await ProcessoParte
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  ProcessoParte
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             polo: data.polo,
         }
     });
 }

