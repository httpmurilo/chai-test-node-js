'use strict';
const repository = require('../repositories/vara-repository');
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
exports.getById = async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
exports.getByName = async(req, res, next) => {
    try {
        const data = await repository.getByName(req.params.nome);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.add = async (req, res, next) =>{
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.endereco, 3, 'O endereco deve conter pelo menos 3 caracteres');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.add(req.body);
        res.status(201).send({
            message: 'Vara cadastrada com sucesso!'
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
        await repository.delete(req.params.id)
        res.status(200).send({
            message: 'Vara removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.update = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Vara atualizada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};