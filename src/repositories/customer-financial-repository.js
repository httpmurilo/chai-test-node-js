'use strict';

const mongoose = require('mongoose');
const CustomerFinancial = mongoose.model('CustomerFinancial');


exports.get = async() => {
   const res = await CustomerFinancial.find({}, 'titulo descricao valorEntrada dataLancamento')
    .populate('Customer','nome')
        return res;
}

exports.getById = async (id) =>{
   const res = await CustomerFinancial
        .findById(id);
    return res;
}
exports.getByName = async (nome) =>{
    const res =  await CustomerFinancial
        .find({
            nome: nome,
        }, 'nome numeroDocumento ativo ');
        return res;
 }

exports.add = async (data) => {
    var cus = new CustomerFinancial(data);
    await cus.save();
}
exports.delete = async (id) =>{
    await CustomerFinancial
        .findOneAndRemove(id)
}

exports.update = async (id,data) => {
    await  CustomerFinancial
         .findByIdAndUpdate(id,{
             $set:{
             nome: data.nome,
             numeroDocumento: data.numeroDocumento,
             ativo: data.ativo
         }
     });
 }

