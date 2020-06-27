'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/vara-controlador');


router.get('/buscarPor/:nome', controller.obterPorNome);
router.get('/', controller.obter);
router.get('/:id', controller.obterPorId);
router.post('/', controller.adicionar);
router.delete('/:id', controller.deletar);
router.put('/:id', controller.atualizar);


module.exports = router;