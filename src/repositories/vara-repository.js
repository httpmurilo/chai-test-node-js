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
exports.getPorNome = async (nome) =>{
    const res =  await Vara
        .find({
            nome: nome,
        }, 'nome descricao endereco');
        return res;
 }

exports.create = async (data) => {
    var vara = new Vara(data);
    await vara.save();
}
exports.delete = async (id) =>{
    await Vara
        .findOneAndRemove(id)
}