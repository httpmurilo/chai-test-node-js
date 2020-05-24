'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/processo-parte-controller');

router.get('/', controller.buscar);
router.get('/:id', controller.buscarPorNumeroOrndeador);
router.post('/', controller.adicionar);
router.delete('/:id', controller.deletar);
router.put('/:id', controller.atualizar);


module.exports = router;