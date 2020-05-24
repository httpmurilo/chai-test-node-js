'use strict';
const repository = require('../repositories/tarefa-repository');
const ValidationContract = require('../validators/fluent-validator');



exports.buscar = async(req, res, next) => {
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
        var data = await repository.BuscarPorId(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.adicionar = async (req, res, next) =>{
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome, 3, 'O nome da tarefa deve conter pelo menos 3 caracteres');
    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Tarefa cadastrada com sucesso!'
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
            message: 'Tarefa removida com sucesso!'
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
            message: 'Tarefa atualizada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};