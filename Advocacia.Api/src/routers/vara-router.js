'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/vara-controller');

router.get('/', controller.get);
router.get('/:id', controller.BuscarPorId);
router.get('/buscarPor/:nome', controller.buscarPorNome);
router.post('/', controller.post);
router.delete('/', controller.delete);
router.put('/:id', controller.atualizar);


module.exports = router;