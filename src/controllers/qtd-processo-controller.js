'use strict';
const repository = require('../repositories/qtd-processo-repository');
const ValidationContract = require('../validators/fluent-validator');



exports.buscar = async(req, res, next) => {
    try {
        var data = await repository.buscar();
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'falha ao processar sua requisicao - mas voce bateu na rota certa :)'
        });
    }
}
