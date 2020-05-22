'use strict';

const mongoose = require('mongoose');
const PagDoc = mongoose.model('PagDoc');


exports.get = async() => {
   const res = await PagDoc.find({}, 'nomeDocumento blob')
            .populate('Cliente', 'nome')
    return res;
}

exports.buscarPorId = async (id) =>{
   const res = await PagDoc
        .findById(id);
    return res;
}

exports.create = async (data) => {
    var pag = new PagDoc(data);
    await pag.save();
}
exports.deletar = async (id) =>{
    await PagDoc
        .findOneAndRemove(id)
}

exports.atualizar = async (id,data) => {
    await  PagDoc
         .findByIdAndUpdate(id,{
             $set:{
             nomeDocumento: data.nomeDocumento,
             blob: data.blob,
             Cliente: data.Cliente
         }
     });
 }

