'use strict';

const mongoose = require('mongoose');
const Vara = mongoose.model('Vara');


exports.get = async() => {
   const res = await Vara.find({
            }, 'nome descricao endereco');
        return res;
}

exports.getById = async (id) =>{
   const res= await Vara
        .findById(id);
    return res;
}
exports.getByName = async (nome) =>{
    const res =  await Vara
        .find({
            nome: nome,
        }, 'nome descricao endereco');
        return res;
 }

exports.add = async (data) => {
    var vara = new Vara(data);
    await vara.save();
}
exports.delete = async (id) =>{
    await Vara
        .findOneAndRemove(id)
}

exports.update = async (id,data) => {
    await  Vara
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             descricao: data.descricao,
             endereco: data.endereco,
         }
     });
 }

