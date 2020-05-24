'use strict';

const mongoose = require('mongoose');
const Vara = mongoose.model('Vara');


exports.buscar = async() => {
   const res = await Vara.find({
            }, 'nome descricao endereco');
        return res;
}

exports.buscarPorId = async (id) =>{
   const res= await Vara
        .findById(id);
    return res;
}
exports.buscarPorNome = async (nome) =>{
    const res =  await Vara
        .find({
            nome: nome,
        }, 'nome descricao endereco');
        return res;
 }

exports.adicionar = async (data) => {
    var vara = new Vara(data);
    await vara.save();
}
exports.deletar = async (id) =>{
    await Vara
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  Vara
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             descricao: data.descricao,
             endereco: data.endereco,
         }
     });
 }

