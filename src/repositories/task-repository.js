'use strict';

const mongoose = require('mongoose');
const Tarefa = mongoose.model('Tarefa');


exports.buscar = async() => {
   const res = await Tarefa.find({
            }, 'nome descricao endereco');
        return res;
}

exports.buscarPorId = async (id) =>{
   const res= await Tarefa
        .findById(id);
    return res;
}

exports.adicionar = async (data) => {
    var tarefa = new Tarefa(data);
    await tarefa.save();
}
exports.deletar = async (id) =>{
    await Tarefa
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  Tarefa
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             descricao: data.descricao,
             endereco: data.endereco,
         }
     });
 }

