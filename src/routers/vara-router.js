'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/vara-controller');

router.get('/', controller.buscar);
router.get('/:id', controller.buscarPorId);
router.get('/buscarPor/:nome', controller.buscarPorNome);
router.post('/', controller.adicionar);
router.delete('/', controller.deletar);
router.put('/:id', controller.atualizar);


module.exports = router;