'use strict';

const repository = require('../repositories/pagdoc-repository');
const ValidationContract = require('../validators/fluent-validator');


exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'falha ao processar sua requisicao'
        });
    }
}
exports.buscarPorId = async(req, res, next) => {
    try {
        var data = await repository.buscarPorId(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.post = async (req, res, next) =>{
    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Documento cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.deletar(req.params.id)
        res.status(200).send({
            message: 'Documento removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.atualizar = async(req, res, next) => {
    try {
        await repository.atualizar(req.params.id, req.body);
        res.status(200).send({
            message: 'Documento atualizado!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
