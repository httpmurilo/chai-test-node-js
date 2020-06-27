'use strict';

const repository = require('../repositories/financeiroCliente-repositorio');
const ValidationContract = require('../validators/fluent-validator');


exports.obter = async(req, res, next) => {
    try {
        var data = await repository.obter();
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'falha ao processar sua requisicao'
        });
    }
}
exports.obterPorId = async(req, res, next) => {
    try {
        var data = await repository.obterPorId(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.adicionar = async (req, res, next) =>{
    try {
        await repository.adicionar(req.body);
        res.status(201).send({
            message: 'Cliente cadastrado co sucesso'
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
        await repository.deletar(req.params.id)
        res.status(200).send({
            message: 'Cliente removido com sucesso!'
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
            message: 'Cliente foi atualizado com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
