'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.get = async() => {
   const res = await Customer.find({
}, 'nome numeroDocumento ativo ');
        return res;
}

exports.getById = async (id) =>{
   const res = await Customer
        .findById(id);
    return res;
}
exports.getByName = async (nome) =>{
    const res =  await Cliente
        .find({
            nome: nome,
        }, 'nome numeroDocumento ativo ');
        return res;
 }

exports.add = async (data) => {
    var custumer = new Customer(data);
    await custumer.save();
}
exports.deletar = async (id) =>{
    await Customer
        .findOneAndRemove(id)
}

exports.update = async (id,data) => {
    await  Customer
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             numeroDocumento: data.numeroDocumento,
             ativo: data.ativo
         }
     });
 }

