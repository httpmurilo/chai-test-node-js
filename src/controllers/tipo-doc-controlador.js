'use strict';

const repository = require('../repositories/tipoDoc-repositorio');
const ValidationContract = require('../validators/fluent-validator');


exports.obter = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'falha ao processar sua requisicao'
        });
    }
}
exports.obterPorId = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.adicionar = async (req, res, next) =>{
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome, 3, 'O nome do tipo de documento deve conter pelo menos 3 caracteres');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.add(req.body);
        res.status(201).send({
            message: 'O tipo de documento foi cadastrado co sucesso'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.deletar = async(req, res, next) => {
    try {
        await repository.delete(req.params.id)
        res.status(200).send({
            message: 'O tipo de documento removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.atualizar = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'O tipo de documento foi atualizado com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
